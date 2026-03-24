<script>
	import * as config from '$lib/config';
	import { Badge } from '$lib/components/ui/badge';
	import { homePageData, projects } from '$lib/data';
	import { ArrowUpRight, ExternalLink } from 'lucide-svelte';
</script>

<svelte:head>
	<title>{config.title}</title>
	<link rel="canonical" href="https://macintushar.xyz/" />

	<meta name="description" content={config.description} />

	<meta property="og:type" content="website" />
	<meta property="og:title" content="Tushar Selvakumar // Software Engineer // Portfolio" />
	<meta property="og:description" content={config.description} />
	<meta property="og:url" content="https://macintushar.xyz/" />
	<meta property="og:image" content={config.ogImage} />

	<meta name="twitter:card" content="summary" />
	<meta name="twitter:title" content="Tushar Selvakumar // Software Engineer // Portfolio" />
	<meta name="twitter:description" content={config.description} />
	<meta name="twitter:image" content={config.ogImage} />
</svelte:head>

<main class="flex flex-col space-y-12 sm:space-y-16">
	<div class="grid grid-cols-1 gap-6 sm:grid-cols-3">
		<div class="col-span-2 flex flex-col gap-3 text-center sm:gap-4 sm:text-left">
			<div class="flex flex-col gap-2 sm:gap-3">
				<h1 class="text-2xl font-semibold sm:text-3xl">
					👋 Hi, I'm <i>{homePageData.name}</i>,
				</h1>
				<p class="text-muted-foreground">
					commonly known as <Badge class="text-white">{homePageData.tag}</Badge> on the Internet.
				</p>
			</div>
			<p class="text-muted-foreground">
				I'm a
				<span class="text-primary font-semibold">{homePageData.tagline}</span>, currently working at
				<span class="text-primary font-semibold">{homePageData.organisation}</span>
				as a
				<span class="text-primary font-semibold">{homePageData.role}</span>.
			</p>
			<p>{homePageData.additionalInfo[0]}</p>
			<p>{homePageData.additionalInfo[1]}</p>
		</div>
		<enhanced:img
			src="/src/assets/images/profile.jpeg"
			class="mx-auto size-40 h-40 w-40 rounded-full object-cover sm:size-48 md:size-64"
			alt={homePageData.name}
			fetchpriority="high"
		/>
	</div>

	<div class="flex flex-col gap-6">
		<div class="flex items-center justify-between">
			<h2 class="text-2xl sm:text-3xl">Featured Projects</h2>
			<a
				href="/projects"
				class="text-muted-foreground hover:text-foreground flex items-center gap-1 text-sm transition-colors sm:text-base"
			>
				View all
				<ArrowUpRight class="h-4 w-4" />
			</a>
		</div>

		<div class="grid gap-4 sm:gap-6 md:grid-cols-2">
			{#each projects.filter((p) => p.isFeatured).slice(0, 2) as project}
				<a
					href={project.url || project.github}
					target="_blank"
					class="group border-border bg-card hover:border-foreground/20 relative overflow-hidden rounded-xl border transition-all hover:shadow-lg"
				>
					{#if project.heroImage}
						<div class="bg-muted aspect-video w-full overflow-hidden">
							<img
								src={project.heroImage}
								alt={project.name}
								class="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
								loading="lazy"
								decoding="async"
							/>
						</div>
					{/if}

					<div class="flex flex-col gap-3 p-4 sm:p-6">
						<div class="flex items-start justify-between gap-2">
							<h3 class="text-lg font-bold sm:text-2xl">{project.name}</h3>
							<ExternalLink
								class="text-muted-foreground group-hover:text-foreground h-4 w-4 flex-shrink-0 transition-colors"
							/>
						</div>

						<p class="text-muted-foreground line-clamp-2 text-sm sm:text-base">
							{project.description}
						</p>

						{#if project.tags && project.tags.length > 0}
							<div class="flex flex-wrap gap-2">
								{#each project.tags.slice(0, 3) as tag}
									<Badge variant="outline">{tag}</Badge>
								{/each}
								{#if project.tags.length > 3}
									<Badge variant="secondary">+ {project.tags.length - 3}</Badge>
								{/if}
							</div>
						{/if}
					</div>
				</a>
			{/each}
		</div>
	</div>
</main>
