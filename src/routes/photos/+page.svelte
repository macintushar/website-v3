<script lang="ts">
	import type { MetadataType } from '$lib/types';
	import * as config from '$lib/config';

	const imageModules = import.meta.glob(
		'/src/assets/photos/*.{avif,gif,heif,jpeg,jpg,png,tiff,webp,svg}',
		{ eager: true, query: { enhanced: true } }
	);

	import metadata from '../../assets/photos/metadata.json';
	import { MapPin } from 'lucide-svelte';
	const Metadata: MetadataType = metadata;

	const images = Object.entries(imageModules).map(([path, module]) => ({
		path,
		// @ts-expect-error this is okay but ts doesn't know
		src: module.default,
		file_name: path.split('/').pop()?.split('.')[0]
	}));
</script>

<svelte:head>
	<title>Photos | {config.title}</title>
	<meta name="title" content="Photos | Tushar Selvakumar" />
	<meta
		name="description"
		content="View Tushar Selvakumar's travel photography from cities like Amsterdam, Berlin, Zurich, and more."
	/>
	<meta
		name="keywords"
		content="Tushar Selvakumar, photography, travel, Amsterdam, Berlin, Zurich, portfolio"
	/>
	<meta property="og:title" content="Photos | Tushar Selvakumar" />
	<meta
		property="og:description"
		content="Explore travel photos by Tushar Selvakumar from scenic destinations worldwide."
	/>
	<meta property="og:url" content="https://macintushar.xyz/photos" />
	<meta name="twitter:card" content="summary" />
	<meta name="twitter:title" content="Photos | Tushar Selvakumar" />
	<meta
		name="twitter:description"
		content="Travel photography from Europe and beyond by Tushar Selvakumar."
	/>
</svelte:head>

<div class="columns-1 gap-8 sm:columns-2 md:columns-3">
	{#each images as image}
		<div class="mb-8 break-inside-avoid">
			<enhanced:img class="h-full w-full rounded-lg" src={image.src} alt={image.file_name} />
			<div class="flex flex-col pt-2 text-center">
				<h1 class="text-lg font-semibold">
					{image.file_name ? Metadata[image.file_name].title : 'Nice Photo'}
				</h1>
				<p class="text-sm italic text-gray-600 dark:text-gray-100/60">
					<MapPin class="inline h-3.5 w-3.5" />
					{image.file_name ? Metadata[image.file_name].location : 'Somewhere, Earth'}
				</p>
			</div>
		</div>
	{/each}
</div>
