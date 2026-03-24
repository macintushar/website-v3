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
	<link rel="canonical" href="https://macintushar.xyz/projects" />

	<meta name="description" content="Explore Tushar Selvakumar's software projects, including open-source tools, web apps, and experiments in AI and full-stack development." />

	<meta property="og:type" content="website" />
	<meta property="og:title" content="Projects | Tushar Selvakumar" />
	<meta property="og:description" content="Explore Tushar's software projects — Curiositi, Draw, Hawk, and more." />
	<meta property="og:url" content="https://macintushar.xyz/projects" />
	<meta property="og:image" content={config.ogImage} />

	<meta name="twitter:card" content="summary" />
	<meta name="twitter:title" content="Projects | Tushar Selvakumar" />
	<meta name="twitter:description" content="Explore Tushar's software projects — Curiositi, Draw, Hawk, and more." />
	<meta name="twitter:image" content={config.ogImage} />
</svelte:head>

<div class="flex flex-col space-y-5">
	<div class="flex flex-col gap-2">
		<h1 class="text-3xl font-bold sm:text-4xl">Projects</h1>
		<p class="text-muted-foreground">
			Here's some of the fun projects I've worked on. More on my <a
				class="text-primary font-semibold underline"
				href={socialLinks.github}
				target="_blank"
				rel="noopener noreferrer"
			>
				GitHub</a
			>.
		</p>
	</div>
	{#each projects as project}
		<Card>
			<div class="w-full">
				<CardHeader class="flex flex-col space-y-5">
					{#if project.isFeatured}
						{#if project.heroImage && project.heroImage !== ''}
							<img class="rounded-md" src={project.heroImage} alt={project.name} />
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
					<CardTitle class="flex items-center gap-1">
						<h1 class="text-2xl">{project.name}</h1>
						<h2 class="text-primary text-base font-medium">
							/ {project.date || new Date().getFullYear()}
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
								<a
									href={project.github}
									target="_blank"
									aria-label="View repository"
									rel="noopener noreferrer"
								>
									<h1 class="font-bold">
										⭐ {count}
									</h1>
								</a>
							{/await}
						{/if}
					</div>
				</CardFooter>
			</div>
		</Card>
	{/each}
</div>
