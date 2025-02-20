import PostPreview from "@/components/posts/PostPreview";

interface PostPageProps {
  params: {
    id: number;
  };
}

const Post = async ({ params }: PostPageProps) => {
  const id = (await params).id;
  return <PostPreview id={id} />;
};

export default Post;
