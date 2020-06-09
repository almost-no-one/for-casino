import { actionTree } from 'typed-vuex'
import getters from './getters'
import mutations from './mutations'
import state from './state'
import api from '@/repositories/api'

export const SET_POSTS = 'SET_POSTS'

export default actionTree(
	{ state, getters, mutations },
	{
		async getPosts({ commit }): Promise<void> {
			try {
				const posts = await api.posts.getPosts()
				commit(SET_POSTS, posts)
			} catch (e) {
				console.error(e)
				throw e
			}
		},
	},
)
