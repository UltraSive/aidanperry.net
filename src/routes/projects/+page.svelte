<script lang="ts">
	import { profile } from '#lib/data/profile.js';
	import { projects, type Project } from '#lib/data/projects.js';
	import { Button } from '#lib/components/ui/button/index.js';
	import ProjectCard from '#lib/components/site/project-card.svelte';

	const categories = ['All', 'Networking', 'Infrastructure', 'Web'] as const;
	let active = $state<(typeof categories)[number]>('All');

	const visible = $derived(
		active === 'All' ? projects : projects.filter((p: Project) => p.category === active)
	);
</script>

<svelte:head>
	<title>Projects · {profile.name}</title>
	<meta
		name="description"
		content="Open-source networking, infrastructure and web projects by {profile.name}."
	/>
</svelte:head>

<header class="space-y-2">
	<h1 class="text-3xl font-semibold tracking-tight">Projects</h1>
	<p class="text-muted-foreground">
		Data planes, control planes, and the tools around them. Most of it is on
		<a
			href={profile.links.github}
			target="_blank"
			rel="noreferrer"
			class="underline underline-offset-4">GitHub</a
		>.
	</p>
</header>

<div class="mt-8 flex flex-wrap gap-2" role="group" aria-label="Filter by category">
	{#each categories as category (category)}
		<Button
			size="sm"
			variant={active === category ? 'default' : 'outline'}
			aria-pressed={active === category}
			onclick={() => (active = category)}
		>
			{category}
		</Button>
	{/each}
</div>

<div class="mt-6 grid gap-4 sm:grid-cols-2">
	{#each visible as project (project.name)}
		<ProjectCard {project} />
	{/each}
</div>
