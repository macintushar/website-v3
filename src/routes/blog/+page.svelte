<script lang="ts">
	import * as config from '$lib/config';
	import BlogEntry from '$lib/views/blog-entry.svelte';

	export let data;
</script>

<svelte:head>
	<title>Blog | {config.title}</title>
</svelte:head>

<section>
	<ul class="posts text-black dark:text-white">
		{#each data.posts as post}
			<BlogEntry {post} />
		{/each}
	</ul>
</section>
