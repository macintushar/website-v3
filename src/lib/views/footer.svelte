<script>
	import { Github, Linkedin } from 'lucide-svelte';
	import { socialLinks } from '$lib/data';
	
	const startYear = 2024;
	const currentYear = new Date().getFullYear();

	const displayYear = currentYear > startYear ? `${startYear} - ${currentYear}` : startYear;
</script>

<footer class="flex w-full flex-col items-center justify-between gap-4 border-t border-border py-6 text-sm text-muted-foreground sm:flex-row sm:gap-0">
	<p class="text-center sm:text-left">© {displayYear} Tushar Selvakumar</p>
	<div class="flex items-center gap-4">
		<a href={socialLinks.github} target="_blank" aria-label="GitHub" class="transition-colors hover:text-foreground">
			<Github class="h-5 w-5" />
		</a>
		<a href={socialLinks.linkedin} target="_blank" aria-label="LinkedIn" class="transition-colors hover:text-foreground">
			<Linkedin class="h-5 w-5" />
		</a>
	</div>
</footer>
