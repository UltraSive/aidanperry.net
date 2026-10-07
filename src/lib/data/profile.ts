export const profile = {
	name: 'Aidan Perry',
	handle: 'UltraSive',
	title: 'Platform & Network Engineer',
	location: 'Dallas, TX',
	url: 'https://aidanperry.net',
	summary:
		'I build the layers underneath the cloud: VM and container orchestration, eBPF and VPP data planes, distributed configuration and DNS, and the full-stack web apps that sit on top of it all.',
	links: {
		github: 'https://github.com/UltraSive',
		linkedin: 'https://www.linkedin.com/in/ultrasive/',
		x: 'https://x.com/ultrasive'
	}
};

export type Role = {
	company: string;
	companyUrl?: string;
	title: string;
	type?: 'Contract' | 'Freelance';
	start: string;
	end: string;
	location?: string;
	summary?: string;
	highlights?: string[];
	tags?: string[];
};

export const experience: Role[] = [
	{
		company: 'Cosmic Global Networks',
		companyUrl: 'https://cosmic.global',
		title: 'Application Developer',
		start: 'Dec 2025',
		end: 'Present',
		location: 'Dallas, TX',
		summary:
			'Developing software that improves efficiency, automation and user experience for shared and dedicated server rentals.'
	},
	{
		company: 'Packetware',
		companyUrl: 'https://packetware.net',
		title: 'Support Technician',
		start: 'Nov 2023',
		end: 'Dec 2025',
		summary:
			'Led serverless projects and built core platform and network infrastructure for a cloud provider.',
		highlights: [
			'Led serverless projects on Kubernetes that deliver web apps with continuous delivery.',
			'Wrote a Kubernetes operator, driven by APIs and webhooks, that manages an app across multiple regions from a single custom resource.',
			'Built the networking stack, combining eBPF offloading with VPP to protect traffic and provide additional network services.',
			'Created a generic cloud infrastructure platform with hourly billing from the ground up, with a public API so others can build on it.'
		],
		tags: ['Kubernetes', 'Go', 'Rust', 'eBPF', 'VPP', 'Express.js', 'SvelteKit']
	},
	{
		company: 'Path Network',
		companyUrl: 'https://path.net',
		title: 'Datacenter Technician',
		type: 'Contract',
		start: 'Jun 2023',
		end: 'Dec 2024',
		location: 'Dallas, TX',
		summary: 'On-site datacenter work supporting IT infrastructure.'
	},
	{
		company: 'Anchored Hosting',
		companyUrl: 'https://anchored.host',
		title: 'Chief Executive Officer, Aqueous Cloud LLC',
		start: 'Aug 2022',
		end: 'Nov 2024',
		location: 'Dallas, TX',
		summary:
			'Aqueous Cloud LLC, doing business as Anchored Hosting, provided managed and unmanaged infrastructure: virtual machines, dedicated servers and game server hosting in Dallas and Amsterdam on 10 Gb/s networks.',
		highlights: [
			'Built a stateless REST controller for libvirt/QEMU hypervisors that provisions and manages VMs from a central control plane.',
			'Ran browser-based VM consoles through a fleet of dynamically managed noVNC/websockify proxies.',
			'Wrote XDP firewalls and A2S query caches to absorb DDoS and resource exhaustion attacks against game servers.',
			'Shipped a public looking glass and customer-facing sites in SvelteKit.'
		],
		tags: ['libvirt', 'QEMU', 'XDP', 'Go', 'C', 'SvelteKit']
	},
	{
		company: 'Spartan Host',
		companyUrl: 'https://spartanhost.org',
		title: 'Datacenter Remote Hands',
		type: 'Freelance',
		start: 'Apr 2023',
		end: 'Apr 2023',
		location: 'Dallas, TX',
		summary: 'Moved cabinets and decommissioned and recycled hardware.'
	}
];

export const education = [
	{
		school: 'The University of Texas at Dallas',
		location: 'Richardson, TX'
	}
];

export const skills: { group: string; items: string[] }[] = [
	{ group: 'Languages', items: ['Go', 'Rust', 'C', 'TypeScript', 'Python'] },
	{
		group: 'Networking',
		items: [
			'eBPF / XDP / TC',
			'VPP',
			'SONiC',
			'WireGuard',
			'Authoritative DNS',
			'L4 load balancing'
		]
	},
	{
		group: 'Infrastructure',
		items: ['Kubernetes', 'Nomad', 'libvirt / QEMU', 'Docker', 'Prometheus', 'Pingora']
	},
	{ group: 'Web', items: ['Svelte & SvelteKit', 'PostgreSQL', 'Drizzle', 'Convex', 'REST & gRPC'] }
];
