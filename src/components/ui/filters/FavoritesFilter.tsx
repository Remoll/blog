"use client";
import { RootState } from "@/store/store";
import { useDispatch, useSelector } from "react-redux";
import {
  activeFavotiresFilter,
  disableFavotiresFilter,
} from "@/store/slices/filtersSlice";
import { useEffect, useState } from "react";

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

  const activeClasses = "underline font-bold";

  return (
    <div className="text-xs font-poppins">
      <button
        onClick={() => dispatch(disableFavotiresFilter())}
        className={`${
          !isFavoritesFilterActive ? activeClasses : ""
        } uppercase pr-5`}
      >
        Wszystkie
      </button>
      /
      <button
        onClick={() => dispatch(activeFavotiresFilter())}
        className={`${
          isFavoritesFilterActive ? activeClasses : ""
        } uppercase pl-2`}
      >
        Ulubione
      </button>
    </div>
  );
};

export default FavoritesFilter;
