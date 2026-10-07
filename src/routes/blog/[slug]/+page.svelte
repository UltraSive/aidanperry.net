<script lang="ts">
	import ArrowLeftIcon from '@lucide/svelte/icons/arrow-left';
	import { resolve } from '$app/paths';
	import { profile } from '#lib/data/profile.js';
	import { formatDate } from '#lib/format.js';
	import { Badge } from '#lib/components/ui/badge/index.js';
	import type { PageProps } from './$types';

	let { data }: PageProps = $props();
	const post = $derived(data.post);
</script>

<svelte:head>
	<title>{post.title} · {profile.name}</title>
	<meta name="description" content={post.description} />
	<meta name="author" content={profile.name} />
	<meta property="og:type" content="article" />
	<meta property="og:title" content={post.title} />
	<meta property="og:description" content={post.description} />
	<meta property="article:published_time" content={post.date} />
	<meta name="twitter:card" content="summary" />
	<meta name="twitter:title" content={post.title} />
	<meta name="twitter:description" content={post.description} />
</svelte:head>

<article class="mx-auto max-w-2xl">
	<a
		href={resolve('/blog')}
		class="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground"
	>
		<ArrowLeftIcon class="size-4" /> All posts
	</a>

	<header class="mt-6 space-y-3 border-b pb-8">
		<h1 class="text-3xl font-semibold tracking-tight text-balance sm:text-4xl">{post.title}</h1>
		{#if post.description}
			<p class="text-lg text-muted-foreground">{post.description}</p>
		{/if}
		<p class="text-sm text-muted-foreground">
			<time datetime={post.date}>{formatDate(post.date)}</time>
			· {post.readingMinutes} min read
		</p>
		{#if post.tags.length}
			<div class="flex flex-wrap gap-1.5">
				{#each post.tags as tag (tag)}
					<Badge variant="secondary">{tag}</Badge>
				{/each}
			</div>
		{/if}
	</header>

	<div class="typeset typeset-blog mt-8">
		<!-- Rendered at build time from markdown in /content/blog. -->
		<!-- eslint-disable-next-line svelte/no-at-html-tags -->
		{@html post.html}
	</div>
</article>
