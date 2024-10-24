<script lang="ts">
	import { formatDate } from '$lib/utils';

	export let data;
</script>

<!-- SEO -->
<svelte:head>
	<title>{data.meta.title}</title>
	<meta property="og:type" content="article" />
	<meta property="og:title" content={data.meta.title} />
</svelte:head>

<article class="mt-4">
	<!-- Title -->
	<hgroup class="flex flex-col gap-4">
		<p class="text-sm italic text-gray-100/80">{formatDate(data.meta.date)}</p>
		<h1 class="text-2xl font-semibold">{data.meta.title}</h1>
	</hgroup>

	<hr class="my-6" />

	<!-- Post -->
	<div>
		<svelte:component this={data.content} />
	</div>
</article>
