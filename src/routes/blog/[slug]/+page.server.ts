import { error } from '@sveltejs/kit';
import { getPost, getPosts } from '#lib/server/posts.js';
import type { EntryGenerator, PageServerLoad } from './$types';

export const entries: EntryGenerator = () => getPosts().map(({ slug }) => ({ slug }));

export const load: PageServerLoad = async ({ params }) => {
	const post = await getPost(params.slug);
	if (!post) error(404, 'Post not found');
	return { post };
};
