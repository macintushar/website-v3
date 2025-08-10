import { redirect } from '@sveltejs/kit';

import type { RequestHandler } from './$types';
import { RESUME_URL } from '$lib/constants';

export const GET: RequestHandler = () => {
	return redirect(307, RESUME_URL);
};