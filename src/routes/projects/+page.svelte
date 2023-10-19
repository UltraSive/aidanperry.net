<script>
	import { Plus, Minus, Github } from 'lucide-svelte';

	import { slide } from 'svelte/transition';
	import { elasticInOut } from 'svelte/easing';

	const projects = [
		{
			name: 'XDP Firewall',
			description:
				'Firewall utilizing XDP that can be used to block or allow traffic based on IP address, port, and protocol in addition to ratelimiting all on a set of pre definned rules.',
			technologies: ['C', 'eBPF', 'XDP', 'Golang', 'SQL'],
			githubLink: 'https://github.com/UltraSive/GoeBPF-XDP-Simple-Firewall'
		},
		{
			name: 'Traffic Classifier NAT',
			description: 'NAT performed on packets coming in and out of a machine based on a eBPF map.',
			technologies: ['C', 'eBPF', 'TC', 'Golang', 'JSON'],
			githubLink: 'https://github.com/UltraSive/GoeBPF-XDP-Simple-Firewall'
		},
		{
			name: 'A2S Caching',
			description: 'A2S_Info & A2S_Player Pakcet caching in XDP to reduce load on game servers.',
			technologies: ['C', 'eBPF', 'XDP', 'Golang', 'SQL'],
			githubLink: 'https://github.com/UltraSive/GoA2sCache'
		},
		{
			name: 'PteroRust.com',
			description:
				'Rust server wiping tool based on a web interface that interacts with pterodactyl panel API.',
			technologies: ['Python', 'SvelteKit', 'JavaScript', 'APIs'],
			githubLink: 'https://github.com/UltraSive/pterorust.com'
		},
		{
			name: 'AidanPerry.net',
			description: 'A personal website to display my projects and blog posts.',
			technologies: ['SvelteKit', 'JavaScript', 'APIs', 'CMS'],
			githubLink: 'https://github.com/UltraSive/aidanperry.net'
		}
	];

	$: open = 'XDP Firewall';
</script>

<svelte:head>
	<title>Aidan Perry's Projects</title>
</svelte:head>

<div class="container mx-auto p-2">
	{#each projects as project}
		<!-- Accordion Item -->
		<div class="mb-4">
			<button
				class="w-full text-left block bg-gray-100 hover:bg-gray-200 p-2 cursor-pointer rounded-md"
				on:click={() => (open = project.name)}
			>
				{#if open == project.name}
					<Plus class="h-4 inline" />
				{:else}
					<Minus class="h-4 inline" />
				{/if}
				{project.name}
			</button>
			{#if open == project.name}
				<div class="p-4" transition:slide={{ duration: 1000, easing: elasticInOut }}>
					{project.description}
					<div class="flex justify-between">
						<ul class="text-sm text-gray-600">
							{#each project.technologies as tech}
								<li
									class="inline-block relative pr-8 last:pr-0 last-of-type:before:hidden before:absolute before:top-1/2 before:right-3 before:-translate-y-1/2 before:w-1 before:h-1 before:bg-gray-300 before:rounded-full dark:text-gray-400 dark:before:bg-gray-600"
								>
									{tech}
								</li>
							{/each}
						</ul>
						<a href={project.githubLink} class="cursor-pointer">
							<span
								class="inline-flex justify-center items-center w-8 h-8 rounded-full bg-gray-800 hover:bg-gray-700 text-white dark:bg-white dark:text-gray-800"
							>
								<Github class="h-6" />
							</span>
						</a>
					</div>
				</div>
			{/if}
		</div>
	{/each}
</div>
