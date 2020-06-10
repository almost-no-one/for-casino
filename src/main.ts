import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

new Vue({
	router,
	store,
	render: h => h(App),
	created: async function() {
		try {
			await this.$accessor.posts.getPosts()
		} catch (e) {
			// todo handle error
			console.error(e)
			throw e
		}
	},
}).$mount('#app')
