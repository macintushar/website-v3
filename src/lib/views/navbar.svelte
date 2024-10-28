<script lang="ts">
	import { page } from '$app/stores';
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

	let route = $state($page.route.id);
	$effect(() => {
		route = $page.route.id;
	});
</script>

<header class="mt-8 flex flex-col items-baseline space-y-4">
	<a href="/" class="flex items-center gap-3 hover:text-orange-400">
		<img src="/favicon.svg" alt="Tushar Selvakumar Logo" class="h-7 w-7" />
		<h1 class="text-4xl font-bold transition-colors">Tushar Selvakumar</h1>
	</a>
	<div class="flex w-full justify-between">
		<nav class="flex flex-wrap gap-4 font-medium">
			{#each links as link}
				<a
					href={link.href}
					class={'delay-50 flex text-xl transition-all hover:text-orange-300' +
						(route === link.href ? ' text-orange-400' : '')}
				>
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
