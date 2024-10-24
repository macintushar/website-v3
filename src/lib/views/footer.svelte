<script>
	import { Github, Linkedin, X } from 'lucide-svelte';
	import { socialLinks } from '$lib/data';
</script>

<footer class="flex flex-col justify-center space-y-2 pb-3">
	<h1 class="text-md w-full text-center font-medium">Tushar Selvakumar © 2024</h1>
	<div class="flex w-full justify-center space-x-3">
		<a href={socialLinks.github} target="_blank">
			<Github class="h-5 w-5 dark:text-white" />
		</a>
		<a href={socialLinks.linkedin} target="_blank">
			<Linkedin class="h-5 w-5 dark:text-white" />
		</a>
	</div>
</footer>
