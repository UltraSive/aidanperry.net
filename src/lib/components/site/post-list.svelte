<script lang="ts">
	import { resolve } from '$app/paths';
	import { formatDate } from '#lib/format.js';
	import type { PostMeta } from '#lib/types.js';

	let { posts }: { posts: PostMeta[] } = $props();
</script>

<ul class="divide-y">
	{#each posts as post (post.slug)}
		<li>
			<a
				href={resolve('/blog/[slug]', { slug: post.slug })}
				class="group flex flex-col gap-1 py-5 sm:flex-row sm:items-baseline sm:gap-6"
			>
				<time datetime={post.date} class="shrink-0 text-sm text-muted-foreground sm:w-36">
					{formatDate(post.date)}
				</time>
				<div class="space-y-1">
					<h3 class="font-medium group-hover:underline group-hover:underline-offset-4">
						{post.title}
						{#if post.draft}<span class="ml-1 text-xs text-destructive">draft</span>{/if}
					</h3>
					{#if post.description}
						<p class="text-sm text-muted-foreground">{post.description}</p>
					{/if}
				</div>
			</a>
		</li>
	{:else}
		<li class="py-5 text-sm text-muted-foreground">No posts yet.</li>
	{/each}
</ul>
