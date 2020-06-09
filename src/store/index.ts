import Vue from 'vue'
import Vuex from 'vuex'
import { useAccessor, mutationTree, actionTree } from 'typed-vuex'

import posts from './modules/posts'

export const state = () => ({})

export const getters = {}

export const mutations = mutationTree(state, {})

export const actions = actionTree({ state, getters, mutations }, {})

const storePattern = {
	state,
	mutations,
	actions,
	modules: {
		posts,
	},
}

Vue.use(Vuex)

const store = new Vuex.Store(storePattern)
export const accessor = useAccessor(store, storePattern)

Vue.prototype.$accessor = accessor

export default store
