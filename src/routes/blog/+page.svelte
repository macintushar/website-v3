<script lang="ts">
	import * as config from '$lib/config';
	import BlogEntry from '$lib/views/blog-entry.svelte';

	export let data;
</script>

<svelte:head>
	<title>Blog | {config.title}</title>
	<meta name="title" content="Blog | Tushar Selvakumar" />
	<meta
		name="description"
		content="Explore Tushar Selvakumar's blog, featuring insights on front-end development, technology trends, and personal reflections."
	/>
	<meta
		name="keywords"
		content="blog, Tushar Selvakumar, front-end development, technology, insights"
	/>
	<meta property="og:title" content="Blog | Tushar Selvakumar" />
	<meta
		property="og:description"
		content="Insights and reflections on technology and development."
	/>
	<meta property="og:url" content="https://macintushar.xyz/blog" />
	<meta name="twitter:card" content="summary" />
	<meta name="twitter:title" content="Blog | Tushar Selvakumar" />
	<meta
		name="twitter:description"
		content="Discover Tushar's insights on technology and front-end development."
	/>
</svelte:head>

<section>
	<ul class="posts text-black dark:text-white">
		{#each data.posts as post}
			<BlogEntry {post} />
		{/each}
	</ul>
</section>
