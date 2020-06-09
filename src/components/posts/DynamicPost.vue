<template>
	<div className="item-dynamic" v-if="post">
		<h1>{{ post.type }} {{ post.timeout }}</h1>
		{{ post }}
	</div>
</template>

<script lang="ts">
	import {Component, Vue, Prop} from 'vue-property-decorator'
	import Post from '@/types/posts/Post'

	@Component({
		components: {},
	})
	export default class DynamicPost extends Vue {
		@Prop({ required: true }) post: Post
	}
</script>
