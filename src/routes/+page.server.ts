import { getPosts } from '#lib/server/posts.js';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = () => ({
	posts: getPosts().slice(0, 3)
});
