import PostsListResolver from "@/components/posts/PostListResolver";
import { fetchPosts } from "@/services/posts";

const PostsPage = async () => {
  const response = await fetchPosts();

  return <PostsListResolver fetchPostsResponse={response} />;
};

export default PostsPage;
