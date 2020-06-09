import Post from '@/types/posts/Post'

const getPosts = async (): Promise<Post[]> => {
	try {
		const response = await fetch('/mock/mockData.json')
		const posts = await response.json()

		return posts.items as Post[]
	} catch (e) {
		console.error(e)
		throw e
	}
}

export default {
	getPosts,
}
