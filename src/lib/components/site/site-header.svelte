<script lang="ts">
	import MenuIcon from '@lucide/svelte/icons/menu';
	import { page } from '$app/state';
	import { resolve } from '$app/paths';
	import logo from '#lib/assets/logo.png';
	import { profile } from '#lib/data/profile.js';
	import { Button } from '#lib/components/ui/button/index.js';
	import * as Sheet from '#lib/components/ui/sheet/index.js';
	import { cn } from '#lib/utils.js';
	import BrandIcon from './brand-icon.svelte';
	import ThemeToggle from './theme-toggle.svelte';
	import { navItems } from './nav.js';

	let menuOpen = $state(false);

	const isActive = (href: string) =>
		page.url.pathname === href || page.url.pathname.startsWith(`${href}/`);
</script>

<header class="sticky top-0 z-40 border-b bg-background/80 backdrop-blur">
	<div class="mx-auto flex h-14 max-w-4xl items-center gap-6 px-4">
		<a href={resolve('/')} class="flex items-center gap-2 font-semibold">
			<img src={logo} alt="" class="size-7 object-contain" width="28" height="28" />
			<span>{profile.name}</span>
		</a>

		<nav class="hidden items-center gap-5 text-sm sm:flex" aria-label="Main">
			{#each navItems as item (item.href)}
				<a
					href={resolve(item.href)}
					aria-current={isActive(item.href) ? 'page' : undefined}
					class={cn(
						'transition-colors hover:text-foreground',
						isActive(item.href) ? 'text-foreground' : 'text-muted-foreground'
					)}
				>
					{item.label}
				</a>
			{/each}
		</nav>

		<div class="ml-auto flex items-center gap-1">
			<Button
				variant="ghost"
				size="icon"
				href={profile.links.github}
				target="_blank"
				rel="noreferrer"
				aria-label="GitHub"
				class="hidden sm:inline-flex"
			>
				<BrandIcon name="github" class="size-4" />
			</Button>
			<ThemeToggle />

			<Sheet.Root bind:open={menuOpen}>
				<Sheet.Trigger>
					{#snippet child({ props })}
						<Button {...props} variant="ghost" size="icon" class="sm:hidden" aria-label="Open menu">
							<MenuIcon />
						</Button>
					{/snippet}
				</Sheet.Trigger>
				<Sheet.Content side="right">
					<Sheet.Header>
						<Sheet.Title>{profile.name}</Sheet.Title>
					</Sheet.Header>
					<nav class="flex flex-col gap-1 px-4" aria-label="Mobile">
						{#each navItems as item (item.href)}
							<a
								href={resolve(item.href)}
								onclick={() => (menuOpen = false)}
								class={cn(
									'rounded-md px-2 py-2 text-base hover:bg-muted',
									isActive(item.href) && 'bg-muted font-medium'
								)}
							>
								{item.label}
							</a>
						{/each}
					</nav>
				</Sheet.Content>
			</Sheet.Root>
		</div>
	</div>
</header>
