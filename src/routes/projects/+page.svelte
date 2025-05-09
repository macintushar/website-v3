<script>
	import * as config from '$lib/config';
	import { Badge } from '$lib/components/ui/badge';
	import { Button } from '$lib/components/ui/button';
	import {
		Card,
		CardHeader,
		CardContent,
		CardDescription,
		CardTitle,
		CardFooter
	} from '$lib/components/ui/card';
	import { projects, socialLinks } from '$lib/data';
	import { getStargazersCount } from '$lib/utils';
</script>

{#snippet link(/** @type {string | undefined} */ url, /** @type {string} */ text)}
	<a href={url} target="_blank">
		<Button class="font-bold" variant="outline" size="sm" aria-label={`Link to ${text}`}
			>{text}</Button
		>
	</a>
{/snippet}

<svelte:head>
	<title>Projects | {config.title}</title>
</svelte:head>

<div class="flex flex-col space-y-5">
	<h1>
		Below is a list of some of the fun projects I've worked on. You can check out my <a
			class="font-semibold text-orange-500 underline"
			href={socialLinks.github}>GitHub</a
		> for more.
	</h1>
	{#each projects as project}
		<Card>
			<div class="w-full">
				<CardHeader class="flex flex-col space-y-5">
					{#if project.isFeatured}
						{#if project.heroImage && project.heroImage !== ''}
							<img src={project.heroImage} alt={project.name} />
						{/if}
						{#if project.tags}
							<div class="flex flex-wrap gap-2">
								{#each project.tags as tag}
									<Badge variant="outline">{tag}</Badge>
								{/each}
							</div>
						{/if}
					{/if}
				</CardHeader>
				<CardContent>
					<CardTitle class="flex gap-1">
						<h1>{project.name}</h1>
						<h2 class="text-sm font-medium text-orange-400">
							/ {project.date || '1970'}
						</h2>
					</CardTitle>
					<CardDescription>
						<p>{project.description}</p>
					</CardDescription>
				</CardContent>
				<CardFooter class="flex flex-row-reverse">
					<div class="flex items-center justify-between space-x-4">
						{@render link(project.github, 'GitHub')}
						{#if project.url}
							{@render link(project.url, project.ctaText || 'Demo')}
						{/if}
						{#if project.repo}
							{#await getStargazersCount(project.repo)}
								<span>Loading stars...</span>
							{:then count}
								<h1 class="font-bold">
									⭐ {count}
								</h1>
							{/await}
						{/if}
					</div>
				</CardFooter>
			</div>
		</Card>
	{/each}
</div>
