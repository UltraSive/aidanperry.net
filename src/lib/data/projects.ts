export type Project = {
	name: string;
	description: string;
	category: 'Networking' | 'Infrastructure' | 'Web';
	tags: string[];
	repo: string;
	featured?: boolean;
};

export const projects: Project[] = [
	{
		name: 'Libvirt REST Controller',
		description:
			'A stateless REST API for controlling libvirt/QEMU hypervisors from a central control plane: provisioning, modifying and power actions, with remote image caching to speed up provisioning.',
		category: 'Infrastructure',
		tags: ['Go', 'libvirt', 'QEMU'],
		repo: 'https://github.com/UltraSive/libvirt-rest-controller',
		featured: true
	},
	{
		name: 'Network Device State Orchestrator',
		description:
			'A distributed control plane for VPP routers and SONiC switches across multiple sites, with a REST API, gRPC device communication and on-device state caching.',
		category: 'Networking',
		tags: ['VPP', 'SONiC', 'gRPC'],
		repo: 'https://github.com/UltraSive/linux-network-device-state-orchestrator',
		featured: true
	},
	{
		name: 'Single Definition App Operator',
		description:
			'A Kubebuilder operator that reconciles Deployments, Services and other primitives from one easy-to-patch custom resource, so one definition can host an app across many regions.',
		category: 'Infrastructure',
		tags: ['Go', 'Kubernetes', 'Kubebuilder'],
		repo: 'https://github.com/UltraSive/single-definition-app-operator',
		featured: true
	},
	{
		name: 'KV Configuration Distribution',
		description:
			'Inspired by Cloudflare Quicksilver: persists configuration as key-value pairs on disk and proxies reads to full replicas depending on node role.',
		category: 'Infrastructure',
		tags: ['Go', 'Distributed systems'],
		repo: 'https://github.com/UltraSive/kv-configuration-distribution',
		featured: true
	},
	{
		name: 'KV Authoritative DNS',
		description:
			'An authoritative DNS server that answers queries for many zones from the KV configuration store over a Unix socket.',
		category: 'Networking',
		tags: ['Go', 'DNS'],
		repo: 'https://github.com/UltraSive/kv-authoritative-dns'
	},
	{
		name: 'Web Asset Cache',
		description:
			'A lightweight CDN cache node speaking a simple text protocol over a Unix socket, with BadgerDB-backed metadata and LRU eviction.',
		category: 'Infrastructure',
		tags: ['Go', 'BadgerDB', 'CDN'],
		repo: 'https://github.com/UltraSive/web-asset-cache'
	},
	{
		name: 'HTTP V8 Isolates',
		description:
			'Runs ephemeral JavaScript and WebAssembly in a shared V8 runtime per HTTP request, loading code from object storage based on the request host.',
		category: 'Infrastructure',
		tags: ['Go', 'V8', 'WebAssembly'],
		repo: 'https://github.com/UltraSive/http-v8-isolates'
	},
	{
		name: 'L4GeoLB',
		description:
			'A proximity-aware layer 4 load balancer for TCP connections across multiple instances.',
		category: 'Networking',
		tags: ['Rust', 'TCP', 'Load balancing'],
		repo: 'https://github.com/UltraSive/L4GeoLB'
	},
	{
		name: 'Ghostwire (contributions)',
		description:
			'Performance work and a simpler YAML schema (CIDRs and port ranges) for an Aya-based XDP/TC firewall, including automatic return-flow allowance for outbound connections.',
		category: 'Networking',
		tags: ['Rust', 'Aya', 'eBPF'],
		repo: 'https://github.com/packetware/ghostwire/tree/sive'
	},
	{
		name: 'Fortified Firewall',
		description:
			'An XDP ingress / TC egress firewall on cilium/ebpf, designed to be driven by flowspec-style rules from a SvelteKit and Postgres UI.',
		category: 'Networking',
		tags: ['C', 'Go', 'eBPF', 'SvelteKit'],
		repo: 'https://github.com/UltraSive/fortified-firewall'
	},
	{
		name: 'GoeBPF XDP Firewall',
		description:
			'A high-performance XDP firewall that allows, blocks and rate-limits traffic by address, port and protocol.',
		category: 'Networking',
		tags: ['C', 'Go', 'XDP'],
		repo: 'https://github.com/UltraSive/GoeBPF-XDP-Simple-Firewall'
	},
	{
		name: 'Go Looking Glass API',
		description:
			'A self-hosted looking glass REST API for on-demand ping and mtr, with streaming and non-streaming output.',
		category: 'Networking',
		tags: ['Go', 'Networking'],
		repo: 'https://github.com/UltraSive/go-looking-glass-api'
	},
	{
		name: 'Websockify Multiproxy',
		description:
			'Runs many TCP-to-WebSocket proxies per hypervisor for noVNC consoles, with live CRUD updates from a central configuration.',
		category: 'Infrastructure',
		tags: ['Python', 'noVNC'],
		repo: 'https://github.com/UltraSive/websockify-multiproxy'
	},
	{
		name: 'goFilesAPI',
		description:
			'A Wings-style HTTP API for browsing and editing container volumes, used to back the file manager of an app hosting platform.',
		category: 'Infrastructure',
		tags: ['Go', 'Gin', 'Containers'],
		repo: 'https://github.com/packetware/goFilesAPI'
	},
	{
		name: 'Sive Chat',
		description:
			'A multi-model LLM chat app built for the T3 Chat Cloneathon, with Google sign-in and messages synced live across devices.',
		category: 'Web',
		tags: ['SvelteKit', 'Convex', 'Drizzle'],
		repo: 'https://github.com/UltraSive/sive-chat'
	},
	{
		name: 'aidanperry.net',
		description:
			'This site: SvelteKit 3, shadcn-svelte and markdown posts styled with shadcn/typeset.',
		category: 'Web',
		tags: ['SvelteKit', 'Tailwind', 'Docker'],
		repo: 'https://github.com/UltraSive/aidanperry.net'
	}
];
