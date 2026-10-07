<script lang="ts">
	import RssIcon from '@lucide/svelte/icons/rss';
	import { resolve } from '$app/paths';
	import { profile } from '#lib/data/profile.js';
	import PostList from '#lib/components/site/post-list.svelte';
	import type { PageProps } from './$types';

	let { data }: PageProps = $props();
</script>

<svelte:head>
	<title>Blog · {profile.name}</title>
	<meta
		name="description"
		content="Notes on networking, infrastructure and software by {profile.name}."
	/>
</svelte:head>

<header class="flex items-start justify-between gap-4">
	<div class="space-y-2">
		<h1 class="text-3xl font-semibold tracking-tight">Blog</h1>
		<p class="text-muted-foreground">Notes on networking, infrastructure and software.</p>
	</div>
	<a
		href={resolve('/blog/rss.xml')}
		class="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground"
		data-sveltekit-reload
	>
		<RssIcon class="size-4" /> RSS
	</a>
</header>

<div class="mt-6">
	<PostList posts={data.posts} />
</div>
