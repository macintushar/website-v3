<script lang="ts">
	import type { MetadataType } from '$lib/types';
	import * as config from '$lib/config';

	const imageModules = import.meta.glob(
		'/src/assets/photos/*.{avif,gif,heif,jpeg,jpg,png,tiff,webp,svg}',
		{ eager: true }
	);

	import metadata from '../../assets/photos/metadata.json';
	const Metadata: MetadataType = metadata;

	const images = Object.entries(imageModules).map(([path, module]) => ({
		path,
		// @ts-ignore
		src: module.default,
		file_name: path.split('/').pop()?.split('.')[0]
	}));
</script>

<svelte:head>
	<title>Photos | {config.title}</title>
</svelte:head>

<div class="columns-1 gap-8 sm:columns-2 md:columns-3">
	{#each images as image}
		<div class="mb-8 break-inside-avoid">
			<img class="h-full w-full rounded-lg" src={image.src} alt={image.file_name} />
			<div class="flex flex-col pt-2 text-center">
				<h1 class="text-lg font-semibold">
					{image.file_name ? Metadata[image.file_name].title : 'Nice Photo'}
				</h1>
				<p class="text-sm italic">
					{image.file_name ? Metadata[image.file_name].location : 'Somewhere, Earth'}
				</p>
			</div>
		</div>
	{/each}
</div>
