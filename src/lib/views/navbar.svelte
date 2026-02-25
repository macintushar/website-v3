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
		class={'hover:text-foreground flex items-center text-sm transition-all' +
			(route === link.href ? ' text-foreground' : ' text-muted-foreground')}
	>
		<span>{route === link.href ? link.hoverName || link.name : link.name}</span>
		{#if link.isExternal}
			<SquareArrowOutUpRight class="ml-0.5 h-3 w-3" />
		{/if}
	</a>
{/snippet}

<header class="flex w-full flex-col gap-6 pt-6 pb-4 sm:gap-8 sm:pt-8">
	<div class="flex items-center justify-between">
		<a
			href="/"
			class="hover:text-muted-foreground flex items-center gap-2 transition-colors sm:gap-3"
		>
			<div class="h-8 w-8 sm:h-10 sm:w-10">
				<Ramen />
			</div>
			<h1 class="text-2xl font-bold sm:text-3xl lg:text-4xl">Tushar Selvakumar</h1>
		</a>
		<div class="sm:hidden">
			<LightSwitch />
		</div>
	</div>

	<div class="flex w-full items-center justify-between">
		<nav class="flex flex-wrap gap-3 sm:gap-4 md:gap-6">
			{#each navbarLinks as link}
				{@render navItem(link)}
			{/each}
		</nav>
		<div class="hidden sm:block">
			<LightSwitch />
		</div>
	</div>
</header>
