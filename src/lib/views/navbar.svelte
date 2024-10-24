<script lang="ts">
	import LightSwitch from '$lib/components/light-switch.svelte';
	import type { NavbarLink } from '$lib/types';
	import { SquareArrowOutUpRight } from 'lucide-svelte';

	const links: NavbarLink[] = [
		{ name: '💻 Projects', href: '/projects', isExternal: false },
		{ name: '✍️ Blog', href: '/blog', isExternal: false },
		{ name: '📷 Photos', href: '/photos', isExternal: false },
		{ name: '✉️️ Contact', href: 'mailto:tusharkumar91111@gmail.com', isExternal: true },
		{
			name: '📄 Resume',
			href: 'https://utfs.io/f/0d4f4098-25c4-4d6d-9200-4b49c61246c4-3olpfc.pdf',
			isExternal: true
		}
	];
</script>

<header class="mt-8 flex flex-col items-baseline space-y-4">
	<a href="/">
		<h1 class="text-4xl font-bold">Tushar Selvakumar</h1>
	</a>
	<div class="flex w-full justify-between">
		<nav class="flex flex-wrap gap-4 font-medium">
			{#each links as link}
				<a href={link.href} class="delay-50 flex text-xl transition-all hover:text-orange-400">
					{link.name}
					{#if link.isExternal}
						<SquareArrowOutUpRight class="ml-1 h-3 w-3" />
					{/if}
				</a>
			{/each}
		</nav>
		<LightSwitch />
	</div>
</header>
