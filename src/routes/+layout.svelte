<script lang="ts">
	import * as config from '$lib/config';
	import Navbar from '$lib/views/navbar.svelte';
	import { ModeWatcher } from 'mode-watcher';

	import '@fontsource/geist-sans/300.css';
	import '@fontsource/geist-sans/400.css';
	import '@fontsource/geist-sans/500.css';
	import '@fontsource/geist-sans/600.css';
	import '@fontsource/geist-sans/700.css';
	import '@fontsource/geist-sans/800.css';

	import '../app.css';
	import Footer from '$lib/views/footer.svelte';
	import { dev } from '$app/environment';
</script>

<ModeWatcher />

<svelte:head>
	<title>{config.title}</title>
	<meta name="google-site-verification" content="o9lr1Nf-ex7J8PExLJ8Xr2AbcWlbYyelyApLl1nNsuo" />
	{#if !dev}
		<script
			defer
			src="https://cloud.umami.is/script.js"
			data-website-id="ce440ee4-d5e7-4de6-aa1a-10168543f054"
		></script>
	{/if}
</svelte:head>

<main class="flex h-full min-h-screen w-full justify-center bg-background transition duration-300">
	<div class="flex w-2/3 flex-col space-y-12">
		<Navbar />
		<div class="h-full">
			<slot />
		</div>
		<Footer />
	</div>
</main>
