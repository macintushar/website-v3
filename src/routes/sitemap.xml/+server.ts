import { url } from '$lib/config';
import { _getPosts } from '../api/blog/+server';

type Page = {
	name: string;
	lastModified?: string;
	changefreq?: string;
	priority?: string;
};

/** @type {import('./$types').RequestHandler} */
export async function GET() {
	const posts = await _getPosts();

	const pages: Page[] = [
		{ name: '', changefreq: 'weekly', priority: '1.0' },
		{ name: 'blog', changefreq: 'daily', priority: '0.8' },
		{ name: 'projects', changefreq: 'weekly', priority: '0.7' },
		{ name: 'photos', changefreq: 'monthly', priority: '0.6' },
		...posts.map((post) => ({
			name: `blog/${post.slug}`,
			lastModified: post.date,
			changefreq: 'monthly',
			priority: '0.8'
		}))
	];

	const body = sitemap(pages);

	const response = new Response(body);

	response.headers.set('Cache-Control', 'max-age=0, s-maxage=3600');
	response.headers.set('Content-Type', 'application/xml');

	return response;
}

const sitemap = (pages: Page[]) => `<?xml version="1.0" encoding="UTF-8" ?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${pages
		.map(
			(page) => `
  <url>
    <loc>${url}${page.name}</loc>
    ${page.lastModified ? `<lastmod>${new Date(page.lastModified).toISOString().split('T')[0]}</lastmod>` : ''}
    <changefreq>${page.changefreq ?? 'weekly'}</changefreq>
    <priority>${page.priority ?? '0.5'}</priority>
  </url>`
		)
		.join('')}
</urlset>`;
