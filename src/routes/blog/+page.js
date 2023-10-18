import axios from 'axios';

/** @type {import('./$types').PageLoad} */
export async function load({ params }) {
	const fetchPosts = async () => {
		console.log('Posts Load Ran');
		const res = await axios.get('https://cms.anchored.host/api/blogs?sort[0]=createdAt:desc&populate=*');
		const data = await res.data.data;
		console.log(data);
		return data;
	};

	return {
		posts: await fetchPosts()
	};
}