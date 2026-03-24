import { canonicalUrl, title, author } from '$lib/config';
import { _getPosts } from '../api/blog/+server';

export async function GET() {
	const posts = await _getPosts();

	const blogSection =
		posts.length > 0
			? posts
					.map(
						(post) =>
							`### [${post.title}](${canonicalUrl}blog/${post.slug})\n\n` +
							`- Date: ${post.date}\n` +
							(post.description ? `- Description: ${post.description}\n` : '') +
							(post.categories?.length
								? `- Categories: ${post.categories.join(', ')}\n`
								: '') +
							`- URL: ${canonicalUrl}blog/${post.slug}`
					)
					.join('\n\n')
			: 'No published posts yet.';

	const body = `# ${title} — Full Content Index

> This file is intended for LLMs and AI crawlers. It contains a full listing of all published content on ${canonicalUrl}.

## About

${author.name} is a ${author.jobTitle} at ${author.worksFor}. Passionate about building great software and web experiences.

- Email: ${author.email}
- GitHub: ${author.github}
- LinkedIn: ${author.linkedin}
- Website: ${canonicalUrl}

## Blog Posts

${blogSection}

## Projects

- **Curiositi** (${canonicalUrl}): Open-source AI knowledge workspace with RAG, document spaces, and agentic web search. Stack: Tanstack Start, Astro, Hono, PostgreSQL, TypeScript.
- **Draw** (https://draw.macintushar.xyz): Digital drawing and collaboration tool. Stack: React, Supabase, Excalidraw.
- **Hawk** (https://hawk.macintushar.xyz): Self-hosted uptime monitoring with public status pages. Stack: Next.js, tRPC, Drizzle ORM, Turso.
- **SPKR - Voice Keyboard** (https://github.com/macintushar/SPKR-Voice-Keyboard): Voice-to-translated-text keyboard app.
- **Sneaker Street** (https://github.com/macintushar/SneakerStore): Sneaker e-commerce platform.

## Site Structure

- Homepage: ${canonicalUrl}
- Blog: ${canonicalUrl}blog
- Projects: ${canonicalUrl}projects
- Photos: ${canonicalUrl}photos
- Atom feed: ${canonicalUrl}atom.xml
- Sitemap: ${canonicalUrl}sitemap.xml
- LLM index: ${canonicalUrl}llms.txt
`;

	return new Response(body, {
		headers: {
			'Content-Type': 'text/plain; charset=utf-8',
			'Cache-Control': 'max-age=0, s-maxage=3600'
		}
	});
}
