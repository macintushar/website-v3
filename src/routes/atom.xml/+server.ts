import { url, title, description } from '$lib/config';
import { _getPosts } from '../api/blog/+server';

/** @type {import('./$types').RequestHandler} */
export async function GET() {
	const posts = await _getPosts();

	const feed = atom(posts);

	return new Response(feed, {
		headers: {
			'Cache-Control': 'max-age=0, s-maxage=3600',
			'Content-Type': 'application/atom+xml; charset=utf-8'
		}
	});
}

const atom = (
	posts: { title: string; slug: string; description: string; date: string }[]
) => `<?xml version="1.0" encoding="UTF-8"?>
<feed xmlns="http://www.w3.org/2005/Atom" xml:lang="en">
    <title>${title} - Blog</title>
    <subtitle>${description}</subtitle>
    <link rel="self" type="application/atom+xml" href="${url}atom.xml"/>
    <link rel="alternate" type="text/html" href="${url}blog/"/>
    <updated>${posts.length > 0 ? new Date(posts[0].date).toISOString() : new Date().toISOString()}</updated>
    <id>${url}atom.xml</id>
    ${posts
			.map(
				(post) => `<entry xml:lang="en">
        <title>${escapeXml(post.title)}</title>
        <published>${new Date(post.date).toISOString()}</published>
        <updated>${new Date(post.date).toISOString()}</updated>
        <author>
          <name>${title}</name>
        </author>
        <link rel="alternate" type="text/html" href="${url}blog/${post.slug}/"/>
        <id>${url}blog/${post.slug}/</id>
        <content type="html" xml:base="${url}blog/${post.slug}/">${escapeXml(`<p>${post.description}</p>`)}</content>
    </entry>`
			)
			.join('\n    ')}
</feed>`;

function escapeXml(str: string): string {
	return str
		.replace(/&/g, '&amp;')
		.replace(/</g, '&lt;')
		.replace(/>/g, '&gt;')
		.replace(/"/g, '&quot;')
		.replace(/'/g, '&apos;');
}
