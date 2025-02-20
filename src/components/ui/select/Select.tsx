import { SelectOption } from "@/interfaces/common";
import React, { ChangeEvent } from "react";

// export enum SortOrder {
//   Newest = "newest",
//   Oldest = "oldest",
// }

interface SortSelectProps {
  value: string;
  onChange: (value: string) => void;
  options: SelectOption[];
  label: string;
}

const SortSelect: React.FC<SortSelectProps> = ({
  value,
  onChange,
  options,
  label,
}) => {
  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    onChange(event.target.value);
  };

  return (
    <div className="flex items-center space-x-2">
      <span className="text-sm text-gray-500">{label}</span>
      <select
        value={value}
        onChange={handleChange}
        className="
            appearance-none 
            text-base
            font-medium
            text-gray-800
            bg-transparent
            pr-[8rem]
            focus:outline-none
            border-b border-gray-300
          "
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SortSelect;
