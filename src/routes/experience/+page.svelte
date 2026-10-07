<script lang="ts">
	import ArrowUpRightIcon from '@lucide/svelte/icons/arrow-up-right';
	import GraduationCapIcon from '@lucide/svelte/icons/graduation-cap';
	import { education, experience, profile, skills } from '#lib/data/profile.js';
	import { Badge } from '#lib/components/ui/badge/index.js';
	import { Separator } from '#lib/components/ui/separator/index.js';
</script>

<svelte:head>
	<title>Experience · {profile.name}</title>
	<meta name="description" content="Roles, education and skills of {profile.name}." />
</svelte:head>

<header class="space-y-2">
	<h1 class="text-3xl font-semibold tracking-tight">Experience</h1>
	<p class="text-muted-foreground">Platform, networking and infrastructure work.</p>
</header>

<ol class="mt-10 space-y-10 border-l pl-6">
	{#each experience as role (role.company)}
		<li class="relative">
			<span
				class="absolute top-2 -left-[29px] size-2.5 rounded-full border-2 border-background bg-foreground"
			></span>
			<div class="flex flex-col justify-between gap-1 sm:flex-row sm:items-baseline">
				<h2 class="text-lg font-semibold">
					{#if role.companyUrl}
						<a
							href={role.companyUrl}
							target="_blank"
							rel="noreferrer"
							class="inline-flex items-center gap-1 hover:underline"
						>
							{role.company}<ArrowUpRightIcon class="size-4 text-muted-foreground" />
						</a>
					{:else}
						{role.company}
					{/if}
				</h2>
				<p class="text-sm text-muted-foreground tabular-nums">
					{role.start === role.end ? role.start : `${role.start} – ${role.end}`}
				</p>
			</div>
			<p class="text-muted-foreground">
				{role.title}{#if role.type}&nbsp;· {role.type}{/if}{#if role.location}&nbsp;· {role.location}{/if}
			</p>
			{#if role.summary}
				<p class="mt-3">{role.summary}</p>
			{/if}
			{#if role.highlights?.length}
				<ul class="mt-3 list-disc space-y-1.5 pl-5 text-sm marker:text-muted-foreground">
					{#each role.highlights as highlight (highlight)}
						<li>{highlight}</li>
					{/each}
				</ul>
			{/if}
			{#if role.tags?.length}
				<div class="mt-4 flex flex-wrap gap-1.5">
					{#each role.tags as tag (tag)}
						<Badge variant="secondary">{tag}</Badge>
					{/each}
				</div>
			{/if}
		</li>
	{/each}
</ol>

<Separator class="my-12" />

<section class="grid gap-10 sm:grid-cols-[1fr_2fr]">
	<div class="space-y-3">
		<h2 class="text-sm font-medium tracking-wide text-muted-foreground uppercase">Education</h2>
		{#each education as school (school.school)}
			<div class="flex gap-3">
				<GraduationCapIcon class="mt-0.5 size-5 shrink-0 text-muted-foreground" />
				<div>
					<p class="font-medium">{school.school}</p>
					<p class="text-sm text-muted-foreground">{school.location}</p>
				</div>
			</div>
		{/each}
	</div>
	<div class="space-y-3">
		<h2 class="text-sm font-medium tracking-wide text-muted-foreground uppercase">Skills</h2>
		<dl class="space-y-3">
			{#each skills as skill (skill.group)}
				<div class="grid gap-1 sm:grid-cols-[8rem_1fr]">
					<dt class="text-sm font-medium">{skill.group}</dt>
					<dd class="flex flex-wrap gap-1.5">
						{#each skill.items as item (item)}
							<Badge variant="outline">{item}</Badge>
						{/each}
					</dd>
				</div>
			{/each}
		</dl>
	</div>
</section>
