<script>
	import { Github, Linkedin } from 'lucide-svelte';
	import { socialLinks } from '$lib/data';
	
	const startYear = 2024;
	const currentYear = new Date().getFullYear();

	const displayYear = currentYear > startYear ? `${startYear} - ${currentYear}` : startYear;
</script>

<footer class="flex flex-col justify-center space-y-2 pb-3">
	<h1 class="text-md w-full text-center font-medium">Tushar Selvakumar © {displayYear}</h1>
	<div class="flex w-full justify-center space-x-3">
		<a href={socialLinks.github} target="_blank" aria-label="Macintushar GitHub">
			<Github class="h-5 w-5 dark:text-white" />
		</a>
		<a href={socialLinks.linkedin} target="_blank" aria-label="Tushar Selvakumar LinkedIn">
			<Linkedin class="h-5 w-5 dark:text-white" />
		</a>
	</div>
</footer>
