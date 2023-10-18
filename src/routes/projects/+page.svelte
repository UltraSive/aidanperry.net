<script>
	import { Plus, Minus } from 'lucide-svelte';

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
			description:
				'NAT performed on packets coming in and out of a machine based on a eBPF map.',
			technologies: ['C', 'eBPF', 'TC', 'Golang', 'JSON'],
			githubLink: 'https://github.com/UltraSive/GoeBPF-XDP-Simple-Firewall'
		},
        {
			name: 'A2S Caching',
			description:
				'A2S_Info & A2S_Player Pakcet caching in XDP to reduce load on game servers.',
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
			description:
				'A personal website to display my projects and blog posts.',
			technologies: [, 'SvelteKit', 'JavaScript', 'APIs', 'CMS'],
			githubLink: 'https://github.com/UltraSive/aidanperry.net'
		},
	];

	$: open = 'XDP Firewall';
</script>

<div class="container mx-auto p-2">
	<div class="bg-white p-4 rounded-lg shadow-md">
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
					</div>
				{/if}
			</div>
		{/each}
	</div>
</div>
