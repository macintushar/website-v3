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

<article class="flex w-full flex-col gap-8">
	<!-- Title -->
	<div class="flex flex-col gap-3 border-b border-border pb-6">
		<p class="text-sm text-muted-foreground">{formatDate(data.meta.date)}</p>
		<h1 class="text-3xl font-bold sm:text-4xl">{data.meta.title}</h1>
	</div>

	<!-- Post -->
	<div class="prose prose-sm sm:prose-base lg:prose-lg max-w-none dark:prose-invert prose-headings:font-serif prose-headings:font-semibold prose-h2:text-2xl prose-h2:mt-8 prose-h2:mb-4 prose-h3:text-xl prose-h3:mt-6 prose-h3:mb-3 prose-p:mb-4 prose-p:leading-relaxed prose-a:text-blue-600 prose-a:no-underline hover:prose-a:underline dark:prose-a:text-blue-400 prose-strong:font-semibold prose-ul:my-4 prose-ul:list-disc prose-ul:pl-6 prose-ol:my-4 prose-ol:list-decimal prose-ol:pl-6 prose-li:mb-2 prose-code:rounded prose-code:bg-muted prose-code:px-1.5 prose-code:py-0.5 prose-code:text-sm prose-code:font-mono prose-pre:rounded-lg prose-pre:bg-muted prose-pre:p-4 prose-pre:overflow-x-auto prose-img:rounded-lg">
		<svelte:component this={data.content} />
	</div>
</article>
