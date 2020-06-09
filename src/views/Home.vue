<template>
	<div class="home">
		<ul class="posts-list" v-if="posts && posts.length">
			<li
				class="posts-list__item"
				v-for="(post, index) of posts"
				:key="index"
			>
				<router-link
					:to="{ name: 'item', params: { slug: post.slug } }"
					class="posts-list__item--link"
					>{{ post.name }}</router-link
				>
			</li>
		</ul>
	</div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

import Post from '@/types/posts/Post'

@Component({
	components: {},
})
export default class Home extends Vue {
	get posts(): Post[] {
		return this.$accessor.posts.allPosts
	}
}
</script>

<style lang="scss" scoped>
.posts-list {
	padding: 0 0 0 50px;
	margin: 0;
	list-style: none;

	&__item {
		margin-bottom: 5px;

		&--link {
			color: #52ba2e;
			text-decoration: underline;

			&:hover {
				text-decoration: none;
			}
		}
	}
}
</style>
