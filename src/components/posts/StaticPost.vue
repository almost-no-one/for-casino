<template>
	<div className="item-static" v-if="post">
		<h1>{{ post.type }}</h1>
		{{ post }}
	</div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Post from '@/types/posts/Post'

@Component({
	components: {},
})
export default class StaticPost extends Vue {
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
