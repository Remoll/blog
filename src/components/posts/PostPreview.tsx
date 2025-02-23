"use client";
// import useFetchPost from "@/hooks/posts/useFetchPost";
import { FaArrowLeft, FaRegStar, FaStar } from "react-icons/fa";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/store/store";
import {
  addPostToFavorites,
  fetchPostById,
  removePostFromFavorites,
} from "@/store/slices/postsSlice";
import SafeHtml from "../ui/safeHtml/safeHtml";
import { globalPaddingClasses } from "@/consts/consts";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

interface PostPreviewProps {
  id: number;
}

const PostPreview = ({ id }: PostPreviewProps) => {
  // const { post, loading } = useFetchPost(id);

  const router = useRouter();

  const dispatch = useDispatch<AppDispatch>();

  const {
    favorites: favoritesPosts,
    postsListDetailed,
    loading,
    error,
  } = useSelector((state: RootState) => state.posts);

  const post = postsListDetailed.find((post) => post.id === id);

  // const favoritesPosts = useSelector(
  //   (state: RootState) => state.posts.favorites
  // );

  const isPostFavorive = favoritesPosts.includes(id);

  const handleSetCategoryFilter = () => {
    if (isPostFavorive) {
      dispatch(removePostFromFavorites(id));
    } else {
      dispatch(addPostToFavorites(id));
    }
  };

  const StarIcon = isPostFavorive ? FaStar : FaRegStar;

  useEffect(() => {
    if (!post) {
      console.log("cooooo");
      dispatch(fetchPostById(id));
    }
  }, [dispatch, post, id]);

  return (
    <div className={`${globalPaddingClasses} max-w-[75rem]`}>
      <div className="flex flex-col md:flex-row justify-between pt-3">
        <button
          type="button"
          onClick={() => router.back()}
          className={`flex items-center pb-6`}
        >
          <FaArrowLeft className="text-black" />
          <span className="text-7xl font-opensans font-bold pl-3">
            Blog Edukacyjny
          </span>
        </button>
        {post && (
          <button
            onClick={() => handleSetCategoryFilter()}
            className="flex items-center pb-6"
          >
            <StarIcon size="2rem" className="text-gray-900" />
            <span className="text-xl font-opensans font-bold pl-3">
              {isPostFavorive ? "usuń z ulubionych" : "dodaj do ulubionych"}
            </span>
          </button>
        )}
      </div>
      {loading ? (
        <h1>Pobieranie posta...</h1>
      ) : post ? (
        <article>
          <header className="pb-6 text-black sm:text-primary">
            <h1 className="text-8xl leading-3xloose font-playfair font-bold pb-6">
              {post?.title}
            </h1>
            <p className="text-xs leading-normal font-opensans">
              {post?.description}
            </p>
          </header>
          <div className="pb-6 article-body">
            <SafeHtml html={post.body} />
          </div>
          <Image
            src={post?.imageUrl}
            alt="example-blog-photo"
            width={185}
            height={58}
            className="object-cover w-full h-[30rem] rounded-tl-card-lg rounded-br-card-lg pb-6"
          />
        </article>
      ) : (
        <h1>Nie udało się pobrać posta</h1>
      )}
    </div>
  );
};

export default PostPreview;
