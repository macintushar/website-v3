<script>
	import * as config from '$lib/config';
	import { Badge } from '$lib/components/ui/badge';
	import ProfilePic from '/src/assets/images/profile.jpeg';
	import { homePageData, projects } from '$lib/data';
	import { ArrowUpRight, ExternalLink } from 'lucide-svelte';
</script>

<svelte:head>
	<title>{config.title}</title>

	<meta property="og:title" content="Tushar Selvakumar – Front-End Developer | Portfolio" />
	<meta
		property="og:description"
		content="Explore the portfolio of Tushar Selvakumar, including projects, blogs, and photography."
	/>
	<meta property="og:url" content="https://macintushar.xyz/" />

	<meta name="twitter:title" content="Tushar Selvakumar – Front-End Developer | Portfolio" />
	<meta
		name="twitter:description"
		content="Discover Tushar's projects and insights as a front-end developer and as a Software Engineer."
	/>
</svelte:head>

<main class="flex flex-col space-y-12 sm:space-y-16">
	<div
		class="flex flex-col-reverse items-center justify-between gap-6 sm:flex-row sm:items-start sm:gap-8"
	>
		<div class="flex flex-col gap-3 text-center sm:gap-4 sm:text-left">
			<div class="flex flex-col gap-2 sm:gap-3">
				<h1 class="text-2xl font-semibold sm:text-3xl">
					👋 Hi, I'm {homePageData.name},
				</h1>
				<h1 class="text-base sm:text-lg">
					commonly known as <Badge class="mx-1 bg-blue-500 text-sm text-white dark:bg-blue-950"
						>{homePageData.tag}</Badge
					> on the Internet.
				</h1>
			</div>
			<p class="text-base sm:text-lg">
				I'm a
				<span class="font-semibold text-orange-400">{homePageData.tagline}</span>,
			</p>
			<p class="text-base sm:text-lg">
				currently working at <span class="font-semibold text-orange-400"
					>{homePageData.organisation}</span
				>
				as a
				<span class="font-semibold text-orange-400">{homePageData.role}</span>.
			</p>
			<p class="text-sm text-muted-foreground sm:text-base">{homePageData.additionalInfo[0]}</p>
			<p class="text-sm text-muted-foreground sm:text-base">{homePageData.additionalInfo[1]}</p>
		</div>
		<img 
			src={ProfilePic} 
			class="h-40 w-40 rounded-full object-cover sm:h-48 sm:w-48 md:h-64 md:w-64" 
			alt={homePageData.name} 
		/>
	</div>
	
	<div class="flex flex-col gap-6">
		<div class="flex items-center justify-between">
			<h2 class="text-2xl font-semibold sm:text-3xl">Featured Projects</h2>
			<a 
				href="/projects" 
				class="flex items-center gap-1 text-sm text-muted-foreground transition-colors hover:text-foreground sm:text-base"
			>
				View all
				<ArrowUpRight class="h-4 w-4" />
			</a>
		</div>
		
		<div class="grid gap-4 sm:gap-6 md:grid-cols-2">
			{#each projects.filter(p => p.isFeatured).slice(0, 2) as project}
				<a
					href={project.url || project.github}
					target="_blank"
					class="group relative overflow-hidden rounded-xl border border-border bg-card transition-all hover:border-foreground/20 hover:shadow-lg"
				>
					{#if project.heroImage}
						<div class="aspect-video w-full overflow-hidden bg-muted">
							<img
								src={project.heroImage}
								alt={project.name}
								class="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
							/>
						</div>
					{/if}
					
					<div class="flex flex-col gap-3 p-4 sm:p-6">
						<div class="flex items-start justify-between gap-2">
							<h3 class="text-lg font-semibold sm:text-xl">{project.name}</h3>
							<ExternalLink class="h-4 w-4 flex-shrink-0 text-muted-foreground transition-colors group-hover:text-foreground" />
						</div>
						
						<p class="line-clamp-2 text-sm text-muted-foreground sm:text-base">
							{project.description}
						</p>
						
						{#if project.tags && project.tags.length > 0}
							<div class="flex flex-wrap gap-2">
								{#each project.tags.slice(0, 3) as tag}
									<span class="rounded-full bg-muted px-2.5 py-1 text-xs font-medium">
										{tag}
									</span>
								{/each}
								{#if project.tags.length > 3}
									<span class="rounded-full bg-muted px-2.5 py-1 text-xs font-medium text-muted-foreground">
										+{project.tags.length - 3}
									</span>
								{/if}
							</div>
						{/if}
					</div>
				</a>
			{/each}
		</div>
	</div>
</main>
