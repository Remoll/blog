import PostsListResolver from "@/components/posts/PostListResolver";
import { fetchPostsList } from "@/services/posts/posts";

const PostsListPage = async () => {
  const response = await fetchPostsList();

  return <PostsListResolver fetchPostsResponse={response} />;
};

export default PostsListPage;
