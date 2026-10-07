<script lang="ts">
	import { page } from '$app/state';
	import { resolve } from '$app/paths';
	import { Button } from '#lib/components/ui/button/index.js';
</script>

<svelte:head>
	<title>{page.status} · Aidan Perry</title>
</svelte:head>

<div class="flex flex-col items-center gap-4 py-24 text-center">
	<p class="font-mono text-sm text-muted-foreground">{page.status}</p>
	<h1 class="text-3xl font-semibold tracking-tight">
		{page.status === 404 ? 'Page not found' : 'Something went wrong'}
	</h1>
	<p class="text-muted-foreground">{page.error?.message}</p>
	<Button href={resolve('/')} variant="outline">Back home</Button>
</div>
