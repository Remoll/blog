import PostPreview from "@/components/posts/PostPreview";

interface PostPageProps {
  params: {
    id: string;
  };
}

const Post = async ({ params }: PostPageProps) => {
  const stringId = (await params).id;
  const postId = parseInt(stringId);
  return <PostPreview id={postId} />;
};

export default Post;
