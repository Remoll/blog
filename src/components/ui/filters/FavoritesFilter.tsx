"use client";
import { RootState } from "@/store/store";
import { useDispatch, useSelector } from "react-redux";
import {
  activeFavotiresFilter,
  disableFavotiresFilter,
} from "@/store/slices/filtersSlice/filtersSlice";
import { useEffect, useState } from "react";
import translations from "@/locates/pl/translations.json";

const FavoritesFilter = () => {
  const [mounted, setMounted] = useState(false);

  const dispatch = useDispatch();

  const isFavoritesFilterActive = useSelector(
    (state: RootState) => state.filters.isFavoritesFilterActive
  );

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const activeClasses = "underline font-bold text-red-900";
  const inactiveClasses = "text-gray-950";

  return (
    <div className="text-xs font-poppins">
      <button
        onClick={() => dispatch(disableFavotiresFilter())}
        className={`${
          !isFavoritesFilterActive ? activeClasses : inactiveClasses
        } uppercase pr-5`}
      >
        {translations["all"]}
      </button>
      <span className="text-red-900 font-bold">/</span>
      <button
        onClick={() => dispatch(activeFavotiresFilter())}
        className={`${
          isFavoritesFilterActive ? activeClasses : inactiveClasses
        } uppercase pl-2`}
      >
        {translations["favorites"]}
      </button>
    </div>
  );
};

export default FavoritesFilter;
