<template>
	<div class="item" v-if="post">
		<component :is="component" :post="post" />
	</div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Post from '@/types/posts/Post'
import StaticPost from '@/components/posts/StaticPost.vue'
import DynamicPost from '@/components/posts/DynamicPost.vue'

@Component({
	components: {},
})
export default class Home extends Vue {
	types = [
		{
			type: 'static',
			component: StaticPost,
		},
		{
			type: 'dynamic',
			component: DynamicPost,
		},
	]

	get component() {
		return this.types.find(item => item.type === this.post.type)!.component
	}

	get post(): Post {
		return this.$accessor.posts.getPostBySlug(this.$route.params.slug)
	}
}
</script>

<style lang="scss" scoped>
.item {
	padding: 100px;
}
</style>
