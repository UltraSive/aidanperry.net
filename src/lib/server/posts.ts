import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkGfm from 'remark-gfm';
import remarkRehype from 'remark-rehype';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeShiki from '@shikijs/rehype';
import rehypeStringify from 'rehype-stringify';
import { parse as parseYaml } from 'yaml';
import type { Element, Root } from 'hast';
import type { Post, PostMeta } from '#lib/types.js';

// Posts live in /content/blog/<slug>.md and are bundled at build time.
const files = import.meta.glob<string>('/content/blog/*.md', {
	query: '?raw',
	import: 'default',
	eager: true
});

const FRONTMATTER = /^---\r?\n([\s\S]*?)\r?\n---\r?\n?/;

function parseFile(path: string, raw: string) {
	const slug = path.split('/').pop()!.replace(/\.md$/, '');
	const match = raw.match(FRONTMATTER);
	const data = (match ? parseYaml(match[1]) : {}) ?? {};
	const body = match ? raw.slice(match[0].length) : raw;

	if (!data.title) throw new Error(`${path}: frontmatter is missing "title"`);
	if (!data.date) throw new Error(`${path}: frontmatter is missing "date"`);

	const words = body.split(/\s+/).filter(Boolean).length;
	const meta: PostMeta = {
		slug,
		title: String(data.title),
		description: String(data.description ?? ''),
		date: toIsoDate(data.date),
		updated: data.updated ? toIsoDate(data.updated) : undefined,
		tags: Array.isArray(data.tags) ? data.tags.map(String) : [],
		draft: Boolean(data.draft),
		readingMinutes: Math.max(1, Math.round(words / 220))
	};
	return { meta, body };
}

function toIsoDate(value: unknown) {
	const date = value instanceof Date ? value : new Date(String(value));
	if (Number.isNaN(date.getTime())) throw new Error(`Invalid date: ${value}`);
	return date.toISOString().slice(0, 10);
}

const showDrafts = import.meta.env.DEV;

const entries = Object.entries(files)
	.map(([path, raw]) => parseFile(path, raw))
	.filter(({ meta }) => showDrafts || !meta.draft)
	.sort((a, b) => b.meta.date.localeCompare(a.meta.date));

export function getPosts(): PostMeta[] {
	return entries.map(({ meta }) => meta);
}

/** Wrap tables so wide ones scroll horizontally (see shadcn/typeset docs). */
function rehypeScrollTables() {
	return (tree: Root) => {
		const visit = (node: Root | Element) => {
			node.children.forEach((child, i) => {
				if (child.type !== 'element') return;
				if (child.tagName === 'table') {
					node.children[i] = {
						type: 'element',
						tagName: 'div',
						properties: { className: ['typeset-scroll'] },
						children: [child]
					};
				} else {
					visit(child);
				}
			});
		};
		visit(tree);
	};
}

const processor = unified()
	.use(remarkParse)
	.use(remarkGfm)
	.use(remarkRehype)
	.use(rehypeSlug)
	.use(rehypeAutolinkHeadings, {
		behavior: 'wrap',
		test: ['h2', 'h3', 'h4'],
		properties: { className: ['heading-anchor'] }
	})
	.use(rehypeScrollTables)
	.use(rehypeShiki, {
		themes: { light: 'github-light', dark: 'github-dark' },
		defaultColor: false
	})
	.use(rehypeStringify);

const rendered = new Map<string, Promise<string>>();

export async function getPost(slug: string): Promise<Post | undefined> {
	const entry = entries.find(({ meta }) => meta.slug === slug);
	if (!entry) return undefined;

	let html = rendered.get(slug);
	if (!html) {
		html = processor.process(entry.body).then(String);
		rendered.set(slug, html);
	}
	return { ...entry.meta, html: await html };
}
