import { SelectOption } from "@/interfaces/common";
import React, { ChangeEvent } from "react";

interface SortSelectProps {
  value: string;
  onChange: (value: string) => void;
  options: SelectOption[];
  label?: string;
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
    <div className="flex items-center space-x-2 float-right">
      {label && (
        <span className="text-2xs text-gray-500 font-open-sans pr-6">
          {label}
        </span>
      )}
      <select
        value={value}
        onChange={handleChange}
        className="appearance-none text-2xs font-medium font-open-sans text-gray-800 bg-transparent pr-[4rem] lg:pr-[7rem] focus:outline-none border-b border-gray-300 cursor-pointer"
      >
        {options.map((option) => (
          <option
            key={option.value}
            value={option.value}
            className="cursor-pointer"
          >
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SortSelect;
