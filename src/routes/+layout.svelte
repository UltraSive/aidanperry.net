<script lang="ts">
	import './layout.css';
	import { ModeWatcher } from 'mode-watcher';
	import { page } from '$app/state';
	import { profile } from '#lib/data/profile.js';
	import SiteHeader from '#lib/components/site/site-header.svelte';
	import SiteFooter from '#lib/components/site/site-footer.svelte';
	import type { LayoutProps } from './$types';

	let { children }: LayoutProps = $props();
</script>

<svelte:head>
	<link rel="icon" href="/favicon.png" />
	<link rel="canonical" href={new URL(page.url.pathname, profile.url).href} />
	<link
		rel="alternate"
		type="application/rss+xml"
		title="{profile.name}'s blog"
		href="/blog/rss.xml"
	/>
	<meta property="og:site_name" content={profile.name} />
	<meta name="twitter:site" content="@ultrasive" />
</svelte:head>

<ModeWatcher />

<div class="flex min-h-svh flex-col">
	<SiteHeader />
	<main class="mx-auto w-full max-w-4xl flex-1 px-4 py-10 sm:py-16">
		{@render children()}
	</main>
	<SiteFooter />
</div>
