import { getPosts } from '#lib/server/posts.js';
import { profile } from '#lib/data/profile.js';

export const prerender = true;

const escape = (s: string) => s.replace(/[<>&'"]/g, (c) => `&#${c.charCodeAt(0)};`);

export function GET() {
	const items = getPosts()
		.map(
			(post) => `
		<item>
			<title>${escape(post.title)}</title>
			<link>${profile.url}/blog/${post.slug}</link>
			<guid>${profile.url}/blog/${post.slug}</guid>
			<pubDate>${new Date(post.date).toUTCString()}</pubDate>
			<description>${escape(post.description)}</description>
		</item>`
		)
		.join('');

	const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
	<channel>
		<title>${escape(profile.name)}</title>
		<link>${profile.url}/blog</link>
		<description>${escape(profile.summary)}</description>${items}
	</channel>
</rss>`;

	return new Response(xml, {
		headers: { 'Content-Type': 'application/rss+xml; charset=utf-8' }
	});
}
