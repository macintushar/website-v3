<script lang="ts">
	import * as config from '$lib/config';
	import Navbar from '$lib/views/navbar.svelte';
	import { ModeWatcher } from 'mode-watcher';

	import '@fontsource/instrument-sans/400.css';
	import '@fontsource/instrument-sans/500.css';
	import '@fontsource/instrument-sans/600.css';
	import '@fontsource/instrument-sans/700.css';
	import '@fontsource/instrument-serif/400.css';
	import '@fontsource/instrument-serif/400-italic.css';

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

<main class="bg-background flex h-full min-h-screen w-full justify-center transition duration-300">
	<div
		class="flex w-full max-w-6xl flex-col space-y-12 px-4 sm:w-11/12 sm:px-6 md:w-5/6 lg:w-3/4 xl:w-2/3"
	>
		<Navbar />
		<div class="h-full">
			<slot />
		</div>
		<Footer />
	</div>
</main>
