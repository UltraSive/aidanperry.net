import axios from 'axios';

/** @type {import('./$types').PageLoad} */
export async function load({ params }) {
	const fetchPost = async () => {
		console.log('Post Load Ran');
		const res = await axios.get(`https://cms.anchored.host/api/blogs?filters[slug][$eq]=${params.slug}&populate=*`);
		// Its encapsulated in a few data objects.
		const data = await res.data.data;
		console.log(data);
		return data;
	};

	return {
		post: await fetchPost()
	};
}