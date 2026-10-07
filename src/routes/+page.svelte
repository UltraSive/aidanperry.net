<script lang="ts">
	import ArrowRightIcon from '@lucide/svelte/icons/arrow-right';
	import MapPinIcon from '@lucide/svelte/icons/map-pin';
	import { resolve } from '$app/paths';
	import { experience, profile } from '#lib/data/profile.js';
	import { projects } from '#lib/data/projects.js';
	import { Button } from '#lib/components/ui/button/index.js';
	import BrandIcon from '#lib/components/site/brand-icon.svelte';
	import ProjectCard from '#lib/components/site/project-card.svelte';
	import PostList from '#lib/components/site/post-list.svelte';
	import type { PageProps } from './$types';

	let { data }: PageProps = $props();

	const featured = projects.filter((p) => p.featured);
</script>

<svelte:head>
	<title>{profile.name} · {profile.title}</title>
	<meta name="description" content={profile.summary} />
	<meta property="og:title" content={profile.name} />
	<meta property="og:description" content={profile.summary} />
	<meta property="og:type" content="website" />
</svelte:head>

<section class="space-y-6">
	<div class="space-y-3">
		<p class="flex items-center gap-1.5 text-sm text-muted-foreground">
			<MapPinIcon class="size-3.5" />
			{profile.location}
		</p>
		<h1 class="text-4xl font-semibold tracking-tight sm:text-5xl">{profile.name}</h1>
		<p class="text-xl text-muted-foreground">{profile.title}</p>
	</div>
	<p class="max-w-2xl text-lg leading-relaxed">{profile.summary}</p>
	<div class="flex flex-wrap gap-2">
		<Button href={profile.links.github} target="_blank" rel="noreferrer">
			<BrandIcon name="github" class="size-4" /> GitHub
		</Button>
		<Button href={profile.links.linkedin} target="_blank" rel="noreferrer" variant="outline">
			<BrandIcon name="linkedin" class="size-4" /> LinkedIn
		</Button>
		<Button href={resolve('/experience')} variant="ghost">
			Experience <ArrowRightIcon />
		</Button>
	</div>
</section>

<section class="mt-16 space-y-4">
	<h2 class="text-sm font-medium tracking-wide text-muted-foreground uppercase">Currently</h2>
	<ul class="grid gap-3 sm:grid-cols-2">
		{#each experience.filter((r) => r.end === 'Present') as role (role.company)}
			<li class="rounded-lg border p-4">
				<p class="font-medium">{role.company}</p>
				<p class="text-sm text-muted-foreground">{role.title} · since {role.start}</p>
			</li>
		{/each}
	</ul>
</section>

<section class="mt-16 space-y-4">
	<div class="flex items-baseline justify-between">
		<h2 class="text-sm font-medium tracking-wide text-muted-foreground uppercase">
			Selected projects
		</h2>
		<a href={resolve('/projects')} class="text-sm hover:underline">All projects</a>
	</div>
	<div class="grid gap-4 sm:grid-cols-2">
		{#each featured as project (project.name)}
			<ProjectCard {project} />
		{/each}
	</div>
</section>

{#if data.posts.length}
	<section class="mt-16 space-y-2">
		<div class="flex items-baseline justify-between">
			<h2 class="text-sm font-medium tracking-wide text-muted-foreground uppercase">
				Latest writing
			</h2>
			<a href={resolve('/blog')} class="text-sm hover:underline">All posts</a>
		</div>
		<PostList posts={data.posts} />
	</section>
{/if}
