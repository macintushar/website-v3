import { error } from '@sveltejs/kit';

export async function load({ params }) {
	try {
		const post = await import(`../../../assets/blogs/${params.slug}.md`);

		return {
			content: post.default,
			meta: post.metadata
		};
	} catch {
		error(404, `Could not find ${params.slug}`);
	}
}
