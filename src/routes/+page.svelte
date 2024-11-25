<script>
	import * as config from '$lib/config';
	import { Badge } from '$lib/components/ui/badge';
	import ProfilePic from '/src/assets/images/profile.jpeg';
	import { homePageData, projects } from '$lib/data';
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

<main class="flex flex-col space-y-8">
	<div
		class="flex flex-col-reverse items-center justify-between gap-6 sm:flex-row sm:items-start sm:gap-8"
	>
		<div class="flex flex-col gap-2 text-center text-lg sm:text-left">
			<div class="flex flex-col gap-2">
				<h1 class="text-2xl font-semibold">
					👋 Hi, I'm {homePageData.name},
				</h1>
				<h1>
					commonly known as <Badge class="mx-1 bg-blue-500 text-sm text-white dark:bg-blue-950"
						>{homePageData.tag}</Badge
					> on the Internet.
				</h1>
			</div>
			<p>
				I'm a
				<span class="font-semibold text-orange-400">{homePageData.tagline}</span>,
			</p>
			<p>
				currently working at <span class="font-semibold text-orange-400"
					>{homePageData.organisation}</span
				>
				as a
				<span class="font-semibold text-orange-400">{homePageData.role}</span>.
			</p>
			<p>{homePageData.additionalInfo[0]}</p>
			<p>{homePageData.additionalInfo[1]}</p>
		</div>
		<img src={ProfilePic} class="h-64 w-64 rounded-full object-cover" alt={homePageData.name} />
	</div>
	<div class="flex flex-col">
		<h1 class="text-2xl font-semibold">Featured Projects</h1>
		<ul class="mx-4 list-disc sm:mx-8">
			<li>
				<a
					href="/projects"
					class="flex items-center gap-3 hover:cursor-pointer hover:text-orange-400"
				>
					<h1 class="text-lg font-semibold">{projects[0].name}</h1>
					-
					<p class="text-sm font-light">{projects[0].description}</p>
				</a>
			</li>
		</ul>
	</div>
</main>
