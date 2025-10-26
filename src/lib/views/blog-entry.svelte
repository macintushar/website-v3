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
	<div class="group flex flex-col gap-3 rounded-lg border border-border p-4 transition-colors hover:bg-muted/50 sm:p-5">
		<div class="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
			<div class="flex flex-col gap-2">
				<p class="text-sm text-muted-foreground">
					{date.format('MMM DD, YYYY')}
				</p>
				<h2 class="text-lg font-semibold transition-colors group-hover:text-foreground sm:text-xl">
					{post.title}
				</h2>
			</div>
		</div>
		<div class="flex flex-wrap gap-2">
			{#each categories as category}
				<Badge variant="secondary" class="text-xs">{category}</Badge>
			{/each}
		</div>
	</div>
</a>
