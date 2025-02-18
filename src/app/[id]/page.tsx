interface PostPageProps {
  params: {
    id: string;
  };
}

const Post = async ({ params }: PostPageProps) => {
  const id = (await params).id;

  return <h1>post {id}</h1>;
};

export default Post;
