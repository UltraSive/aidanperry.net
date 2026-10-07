<script lang="ts">
	import ArrowUpRightIcon from '@lucide/svelte/icons/arrow-up-right';
	import * as Card from '#lib/components/ui/card/index.js';
	import { Badge } from '#lib/components/ui/badge/index.js';
	import type { Project } from '#lib/data/projects.js';

	let { project }: { project: Project } = $props();
</script>

<Card.Root class="group relative h-full transition-colors hover:bg-muted/40">
	<Card.Header>
		<Card.Title class="flex items-start justify-between gap-2">
			<a href={project.repo} target="_blank" rel="noreferrer" class="after:absolute after:inset-0">
				{project.name}
			</a>
			<ArrowUpRightIcon
				class="size-4 shrink-0 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
			/>
		</Card.Title>
		<Card.Description>{project.description}</Card.Description>
	</Card.Header>
	<Card.Footer class="mt-auto flex flex-wrap gap-1.5">
		{#each project.tags as tag (tag)}
			<Badge variant="secondary">{tag}</Badge>
		{/each}
	</Card.Footer>
</Card.Root>
