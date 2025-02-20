"use client";
import { SelectOption, SortOrder } from "@/interfaces/common";
import Select from "../select/Select";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { setPostSorterValue } from "@/store/slices/sorterSlice";

const options: SelectOption[] = [
  { value: SortOrder.newest, label: "Najnowsze wpisy" },
  { value: SortOrder.oldest, label: "Najstarsze wpisy" },
];

const PostSorter = () => {
  const [mounted, setMounted] = useState(false);

  const dispatch = useDispatch();

  const postSorterValue = useSelector(
    (state: RootState) => state.sorter.postSorter
  );

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <Select
      options={options}
      label="pokaż od:"
      value={postSorterValue}
      onChange={(newValue) => dispatch(setPostSorterValue(newValue))}
    />
  );
};

export default PostSorter;
