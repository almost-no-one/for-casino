import { getterTree } from 'typed-vuex'
import state from './state'
import Post from '@/types/posts/Post'

export default getterTree(state, {
	allPosts: state => state.posts,
	getPostById: state => (id: number) =>
		state.posts.find(post => post.id === id),
	getPostBySlug: state => (slug: string) =>
		state.posts.find(post => post.slug === slug) as Post,
})
