<script lang="ts">
	import { page } from '$app/stores';
	import LightSwitch from '$lib/components/light-switch.svelte';
	import { navbarLinks } from '$lib/data';
	import type { NavbarLink } from '$lib/types';
	import { SquareArrowOutUpRight } from 'lucide-svelte';
	import Ramen from '../../assets/icons/ramen.svelte';

	let route = $state($page.route.id);
	$effect(() => {
		route = $page.route.id;
	});
</script>

{#snippet navItem(link: NavbarLink)}
	<a
		href={link.href}
		class={'delay-50 flex gap-2 text-xl transition-all hover:text-orange-300' +
			(route === link.href ? ' text-orange-400' : '')}
	>
		<h1 class="">{route === link.href ? link.hoverIcon || link.icon : link.icon}</h1>
		{route === link.href ? link.hoverName || link.name : link.name}
		{#if link.isExternal}
			<SquareArrowOutUpRight class="ml-1 h-3 w-3" />
		{/if}
	</a>
{/snippet}

<header class="mt-8 flex flex-col items-baseline space-y-4">
	<a
		href="/"
		class="flex flex-col items-center gap-3 text-center transition-colors hover:text-orange-400 sm:flex-row sm:text-start"
	>
		<Ramen />
		<h1 class="text-4xl font-bold">Tushar Selvakumar</h1>
	</a>
	<div class="flex w-full flex-col justify-between sm:flex-row">
		<nav class="flex flex-wrap gap-4 font-medium">
			{#each navbarLinks as link}
				{@render navItem(link)}
			{/each}
		</nav>
		<LightSwitch />
	</div>
</header>
