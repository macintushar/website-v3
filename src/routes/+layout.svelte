<script lang="ts">
	import * as config from '$lib/config';
	import Navbar from '$lib/views/navbar.svelte';
	import { ModeWatcher } from 'mode-watcher';

	import '@fontsource/geist-sans/100.css';
	import '@fontsource/geist-sans/200.css';
	import '@fontsource/geist-sans/300.css';
	import '@fontsource/geist-sans/400.css';
	import '@fontsource/geist-sans/500.css';
	import '@fontsource/geist-sans/600.css';
	import '@fontsource/geist-sans/700.css';
	import '@fontsource/geist-sans/800.css';
	import '@fontsource/geist-sans/900.css';

	import '../app.css';
	import Footer from '$lib/views/footer.svelte';
</script>

<ModeWatcher />

<svelte:head>
	<title>{config.title}</title>
</svelte:head>

<main
	class="flex h-full min-h-screen w-full justify-center bg-gray-100 transition duration-300 dark:bg-gray-950"
>
	<div class="flex w-2/3 flex-col space-y-12">
		<Navbar />
		<div class="h-full">
			<slot />
		</div>
		<Footer />
	</div>
</main>

<style lang="postcss">
	:global(html) {
		background-color: theme(colors.gray.100);
	}
</style>
