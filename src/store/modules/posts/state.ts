import Post from '@/types/posts/Post'

export interface PostsState {
	posts: Post[]
}

export default (): PostsState => ({
	posts: [],
})
