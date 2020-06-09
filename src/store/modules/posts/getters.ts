import { getterTree } from "typed-vuex";
import state from "./state";

export default getterTree(state, {
    getAllPosts: state => state.posts,
    getPostById: state => (id: number) => state.posts.filter(post => post.id === id),
    getPostBySlug: state => (slug: string) => state.posts.filter(post => post.slug === slug),
});
