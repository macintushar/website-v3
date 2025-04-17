import { url } from '$lib/config';
import { _getPosts } from '../api/blog/+server';

type Page = {
	name: string;
	lastModified?: string;
};

/** @type {import('./$types').RequestHandler} */
export async function GET() {
	const posts = await _getPosts();

	const pages: Page[] = [
		{
			name: ''
		},
		{
			name: 'blog'
		},
		{
			name: 'photos'
		},
		{
			name: 'projects'
		},
		...posts.map((post) => ({ name: `blog/${post.slug}`, lastModified: post.date }))
	];

	const body = sitemap(pages);

	const response = new Response(body);

	response.headers.set('Cache-Control', 'max-age=0, s-maxage=3600');
	response.headers.set('Content-Type', 'application/xml');

	return response;
}

const sitemap = (pages: Page[]) => `<?xml version="1.0" encoding="UTF-8" ?>
<urlset xmlns="https://www.sitemaps.org/schemas/sitemap/0.9">
  ${pages
		.map(
			(page) => `
  <url>
    <loc>${url}${page.name}</loc>
	${page.lastModified ? `<lastmod>${page.lastModified}</lastmod>` : ''}
    <changefreq>daily</changefreq>
    <priority>0.5</priority>
  </url>
  `
		)
		.join('')}
</urlset>`;
