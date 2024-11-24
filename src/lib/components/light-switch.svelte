<script lang="ts">
	import Sun from 'lucide-svelte/icons/sun';
	import Moon from 'lucide-svelte/icons/moon';

	import { setMode, mode } from 'mode-watcher';

	function handleModeChange() {
		if ($mode === 'light') {
			setMode('dark');
		} else {
			setMode('light');
		}
	}
</script>

<button on:click={handleModeChange} aria-label="Dark/Light Mode Toggle">
	{#if $mode === 'light'}<Moon class="h-6 w-6" />
	{:else}
		<Sun class="h-6 w-6 text-yellow-300" />
	{/if}
</button>
