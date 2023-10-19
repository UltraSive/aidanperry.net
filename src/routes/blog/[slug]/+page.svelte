<script>
	/** @type {import('./$types').PageData} */
	export let data;

	import { marked } from 'marked';
	import hljs from 'highlight.js';

	const post = data.post[0];

	const body = marked.parse(post.attributes.content);

	function formatDate(dateString) {
		const date = new Date(dateString);
		const options = { month: 'long', day: 'numeric', year: 'numeric' };
		return date.toLocaleDateString('en-US', options);
	}
</script>

<svelte:head>
	<title>{post.attributes.title}</title>
	<meta name="description" content={post.attributes.description} />
	<meta name="og:title" content={post.attributes.title} />
	<meta name="og:description" content={post.attributes.description} />
	<meta name="og:type" content="article" />
	<meta name="og:url" content="https://anchored.host/blog/{post.attributes.slug}" />
	<meta name="og:site_name" content="Aidan Perry" />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:site" content="@ultrasive" />
	<meta name="twitter:title" content={post.attributes.title} />
	<meta name="twitter:description" content={post.attributes.description} />
	
	<meta name="twitter:creator" content="@ultrasive" />
	<meta name="twitter:label1" content="Written by" />
	<meta name="twitter:data1" content="Aidan Perry" />
	<meta name="twitter:label2" content="Published on" />
	<meta name="twitter:data2" content={formatDate(post.attributes.createdAt)} />
	{#if post.attributes.image.data != null}
	<meta
		name="og:image"
		content="https://cms.anchored.host{post.attributes.image.data.attributes.url}"
	/>
	<meta
		name="twitter:image"
		content="https://cms.anchored.host{post.attributes.image.data.attributes.url}"
	/>
	{/if}
</svelte:head>

<div class="flex justify-center">
	<article class="px-2 prose lg:prose-xl">
		<h1>{post.attributes.title}</h1>
		<div class="flex justify-center">
			{#if post.attributes.image.data != null}
			<img
				class="max-h-72"
				src="https://cms.anchored.host{post.attributes.image.data.attributes.url}"
				alt="Image Description"
			/>
			{/if}
		</div>
		{@html body}
	</article>
</div>