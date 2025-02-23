import PostsPreviewResolver from "@/components/posts/PostResolver";
import { fetchPost } from "@/services/posts/posts";

interface PostPageProps {
  params: Promise<{
    id: string;
  }>;
}

const PostPage = async ({ params }: PostPageProps) => {
  const stringId = (await params).id;
  const postId = parseInt(stringId);
  const response = await fetchPost(postId);
  return <PostsPreviewResolver fetchPostResponse={response} />;
};

export default PostPage;
