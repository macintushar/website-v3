import { redirect } from '@sveltejs/kit';

import type { RequestHandler } from './$types';
import { RESUME_URL } from '$lib/data';

export const GET: RequestHandler = async ({ request }) => {
	return redirect(307, RESUME_URL);
};