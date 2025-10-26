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

<section class="flex flex-col gap-6">
	<div class="flex flex-col gap-2">
		<h1 class="text-3xl font-bold sm:text-4xl">Blog</h1>
		<p class="text-muted-foreground">
			Thoughts on technology, development, and everything in between.
		</p>
	</div>
	
	<ul class="flex flex-col gap-4">
		{#each data.posts as post}
			<li>
				<BlogEntry {post} />
			</li>
		{/each}
	</ul>
</section>
