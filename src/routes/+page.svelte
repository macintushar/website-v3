<script>
	import { Badge } from '$lib/components/ui/badge';
	import ProfilePic from '/src/assets/images/profile.jpeg';
	import { homePageData } from '$lib/data';
</script>

<main>
	<div
		class="flex flex-col-reverse items-center justify-between gap-6 sm:flex-row sm:items-start sm:gap-8"
	>
		<div class="flex flex-col text-center sm:text-left">
			<div class="mb-2 text-lg">
				<h1 class="mb-2 text-2xl font-semibold">
					👋 Hi, I'm {homePageData.name},
				</h1>
				<h1 class="text-lg">
					commonly known as <Badge class="mx-1 text-sm">{homePageData.tag}</Badge> on the Internet.
				</h1>
			</div>
			<p class="mb-2 text-lg">
				I'm a
				<span class="font-semibold text-orange-400">{homePageData.tagline}</span>,
			</p>
			<p class="text-lg">
				currently working at <span class="font-semibold text-orange-400"
					>{homePageData.organisation}</span
				>
				as a
				<span class="font-semibold text-orange-400">{homePageData.role}</span>.
			</p>
		</div>
		<img src={ProfilePic} class="h-64 w-64 rounded-full object-cover" alt={homePageData.name} />
	</div>
</main>
