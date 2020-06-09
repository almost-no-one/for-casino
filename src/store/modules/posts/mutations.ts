import { mutationTree } from "typed-vuex";
import PostsState from "./state";
import Post from "@/types/posts/Post";

import { SET_POSTS } from "@/store/modules/posts/actions";

export default mutationTree( PostsState, {
    [SET_POSTS](PostsState, posts: Post[]): void {
        PostsState.posts = posts
    }
});
