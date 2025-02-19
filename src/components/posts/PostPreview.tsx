"use client";
import useFetchPost from "@/hooks/useFetchPost";
import Link from "next/link";
import { FaArrowLeft, FaRegStar, FaStar } from "react-icons/fa";
import Image from "next/image";
import useLocalStorage from "@/hooks/useLocalStorage";

interface PostPreviewProps {
  id: string;
}

const PostPreview = ({ id }: PostPreviewProps) => {
  const { post, loading } = useFetchPost(id);

  const favoritePostsLocalStorageKey = "favorites";

  const [currentFavoritePosts, setCurrentFavoritePosts] = useLocalStorage<
    string[]
  >(favoritePostsLocalStorageKey, []);

  const isPostFavorive = currentFavoritePosts.includes(id);

  const handleSetCategoryFilter = () => {
    if (isPostFavorive) {
      const newFavoritePosts = currentFavoritePosts.filter(
        (favoritePostId) => favoritePostId !== id
      );
      setCurrentFavoritePosts(newFavoritePosts);
    } else {
      const newFavoritePosts = [...currentFavoritePosts, id];
      setCurrentFavoritePosts(newFavoritePosts);
    }
  };

  const StarIcon = isPostFavorive ? FaStar : FaRegStar;

  return (
    <>
      <Link href="/" className="flex items-center">
        <FaArrowLeft /> Blog Edukacyjny
      </Link>
      {loading ? (
        <h1>Pobieranie posta...</h1>
      ) : (
        <div>
          <button
            onClick={() => handleSetCategoryFilter()}
            className="flex items-center"
          >
            <StarIcon size="2rem" />
            {isPostFavorive ? "Usuń z ulubionych" : "Dodaj do ulubionych"}
          </button>
          <h1>{post.title}</h1>
          <p>{post.body}</p>
          <Image
            src="/example-blog-photo.jpg"
            alt="example-blog-photo"
            width={185}
            height={58}
            className="object-cover w-full h-[574px] rounded-tl-card-lg rounded-br-card-lg"
          />
        </div>
      )}
    </>
  );
};

export default PostPreview;
