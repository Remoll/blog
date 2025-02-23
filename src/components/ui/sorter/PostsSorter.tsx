"use client";
import { SelectOption, SortOrder } from "@/interfaces/common";
import Select from "../select/Select";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { setPostSorterValue } from "@/store/slices/sorterSlice";
import translations from "@/locates/pl/translations.json";

const options: SelectOption[] = [
  { value: SortOrder.newest, label: translations["entriesLatest"] },
  { value: SortOrder.oldest, label: translations["entriesOldest"] },
];

const PostSorter = () => {
  const [mounted, setMounted] = useState(false);

  const isMobile = useSelector((state: RootState) => state.device.isMobile);

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
      label={isMobile ? undefined : `${translations["showFrom"]}:`}
      value={postSorterValue}
      onChange={(newValue) => dispatch(setPostSorterValue(newValue))}
    />
  );
};

export default PostSorter;
