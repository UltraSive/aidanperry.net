<script lang="ts">
	/** @type {import('./$types').PageData} */
	export let data;

	let posts = data.posts;

	function formatDate(dateString) {
		const date = new Date(dateString);
		const options = { month: 'long', day: 'numeric', year: 'numeric' };
		return date.toLocaleDateString('en-US', options);
	}
</script>

<div class="flex justify-center">
	<div class="px-4">
		{#each posts as post}
			<a href="/blog/{post.attributes.slug}" class="block no-underline ">
				<div
					class="max-w-4xl my-4 hover:bg-gray-50 bg-white border rounded-xl shadow-sm sm:flex dark:bg-gray-800 dark:border-gray-700 dark:shadow-slate-700/[.7]"
				>
					<div
						class="flex-shrink-0 relative w-full rounded-t-xl overflow-hidden pt-[40%] sm:rounded-l-xl sm:max-w-[15rem] md:rounded-tr-none md:max-w-xs"
					>
						<img
							class="w-full h-full absolute top-0 left-0 object-cove"
							src="https://cms.anchored.host{post.attributes.image.data.attributes.url}"
							alt="Image Description"
						/>
					</div>
					<div class="p-4 flex flex-col h-full sm:p-7">
						<h3 class="text-lg font-bold text-gray-800 dark:text-white">
							{post.attributes.title}
						</h3>
						<p class="mt-1 text-gray-800 dark:text-gray-400">
							{post.attributes.description}
						</p>
						<div class="mt-2">
							<p class="text-xs text-gray-500 dark:text-gray-500">
								{formatDate(post.attributes.createdAt)}
							</p>
						</div>
					</div>
				</div>
			</a>
		{/each}
	</div>
</div>
