"use client";
import useFetchPost from "@/hooks/useFetchPost";
import Link from "next/link";
import { FaArrowLeft, FaRegStar, FaStar } from "react-icons/fa";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store/store";
import {
  addPostToFavorites,
  removePostFromFavorites,
} from "@/store/slices/postsSlice";

interface PostPreviewProps {
  id: string;
}

const PostPreview = ({ id }: PostPreviewProps) => {
  const { post, loading } = useFetchPost(id);

  const dispatch = useDispatch();

  const favoritesPosts = useSelector(
    (state: RootState) => state.posts.favorites
  );

  const isPostFavorive = favoritesPosts.includes(id);

  const handleSetCategoryFilter = () => {
    if (isPostFavorive) {
      dispatch(removePostFromFavorites(id));
    } else {
      dispatch(addPostToFavorites(id));
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
