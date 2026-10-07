<script lang="ts">
	import RssIcon from '@lucide/svelte/icons/rss';
	import { resolve } from '$app/paths';
	import { profile } from '#lib/data/profile.js';
	import BrandIcon from './brand-icon.svelte';

	const socials = [
		{ href: profile.links.github, label: 'GitHub', icon: 'github' },
		{ href: profile.links.linkedin, label: 'LinkedIn', icon: 'linkedin' },
		{ href: profile.links.x, label: 'X', icon: 'x' }
	] as const;
</script>

<footer class="border-t">
	<div
		class="mx-auto flex max-w-4xl flex-col items-center justify-between gap-4 px-4 py-8 text-sm text-muted-foreground sm:flex-row"
	>
		<p>© {new Date().getFullYear()} {profile.name}</p>
		<div class="flex items-center gap-4">
			{#each socials as social (social.label)}
				<a
					href={social.href}
					target="_blank"
					rel="noreferrer"
					aria-label={social.label}
					class="transition-colors hover:text-foreground"
				>
					<BrandIcon name={social.icon} class="size-4" />
				</a>
			{/each}
			<a
				href={resolve('/blog/rss.xml')}
				aria-label="RSS feed"
				class="transition-colors hover:text-foreground"
				data-sveltekit-reload
			>
				<RssIcon class="size-4" />
			</a>
		</div>
	</div>
</footer>
