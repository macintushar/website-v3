<script>
	import { IconBrandGithub, IconBrandLinkedin } from '@tabler/icons-svelte-runes';
	import { socialLinks } from '$lib/data';

	const startYear = 2024;
	const currentYear = new Date().getFullYear();

	const displayYear = currentYear > startYear ? `${startYear} - ${currentYear}` : startYear;
</script>

<footer
	class="border-border text-muted-foreground flex w-full flex-col items-center justify-between gap-4 border-t py-6 text-sm sm:flex-row sm:gap-0"
>
	<p class="text-center sm:text-left">© {displayYear} Tushar Selvakumar</p>
	<div class="flex items-center gap-4">
		<a
			href={socialLinks.github}
			target="_blank"
			aria-label="GitHub"
			class="hover:text-foreground transition-colors"
		>
			<IconBrandGithub />
		</a>
		<a
			href={socialLinks.linkedin}
			target="_blank"
			aria-label="LinkedIn"
			class="hover:text-foreground transition-colors"
		>
			<IconBrandLinkedin />
		</a>
	</div>
</footer>
