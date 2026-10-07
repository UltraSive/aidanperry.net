export type PostMeta = {
	slug: string;
	title: string;
	description: string;
	date: string;
	updated?: string;
	tags: string[];
	draft: boolean;
	readingMinutes: number;
};

export type Post = PostMeta & { html: string };
