<script lang="ts">
	export let post: Post;

	import Badge from '$lib/components/ui/badge/badge.svelte';
	import type { Post } from '$lib/types';

	import dayjs from 'dayjs';
	import CustomParseFormat from 'dayjs/plugin/customParseFormat';

	dayjs.extend(CustomParseFormat);

	const date = dayjs(post.date, 'YYYY/MM/DD');
	const categories = post.categories.slice(0, 3);
</script>

<a href={`/blog/${post.slug}`}>
	<div class="group flex flex-col items-center sm:flex-row sm:justify-between">
		<div
			class="flex flex-col items-center space-x-4 text-pretty text-center sm:flex-row sm:text-start"
		>
			<p class="text-sm italic text-gray-500 dark:text-gray-100/80">
				{date.format('MMM DD, YYYY')}
			</p>
			<p>-</p>
			<h1 class="group-hover:text-orange-400">{post.title}</h1>
		</div>
		<div class="flex gap-2">
			{#each categories as category}
				<Badge variant="secondary">{category}</Badge>
			{/each}
		</div>
	</div>
</a>
