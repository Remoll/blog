import CategoryFilter from "../ui/filters/CategoryFilter";
import FavoritesFilter from "../ui/filters/FavoritesFilter";
import PostSorter from "./PostsSorter";
import translations from "@/locates/pl/translations.json";

const PostsFilters = () => {
  return (
    <div className="py-10 overflow-hidden grid grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-x-2 gap-y-6">
      <div className="flex flex-col lg:flex-row lg:items-center order-1 col-start-1">
        <p className="pr-3 text-4xl font-open-sans font-bold">
          {translations["entries"]}
        </p>
        <CategoryFilter />
      </div>
      <div className="pt-2 order-2 col-start-2 lg:order-3 lg:col-start-3 lg:col-end-5 xl:col-start-4 xl:col-end-6 2xl:col-start-5 2xl:col-end-7">
        <PostSorter />
      </div>
      <div className="pt-2 order-3 col-start-1 col-end-3 lg:order-2 lg:col-start-2 xl:col-start-4 2xl:col-start-4 2xl:col-end-5">
        <FavoritesFilter />
      </div>
    </div>
  );
};

export default PostsFilters;
