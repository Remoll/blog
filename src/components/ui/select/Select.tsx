import { SelectOption } from "@/interfaces/common";
import React, { ChangeEvent } from "react";

interface SelectProps {
  value: string;
  onChange: (value: string) => void;
  options: SelectOption[];
  label?: string;
}

const Select: React.FC<SelectProps> = ({ value, onChange, options, label }) => {
  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    onChange(event.target.value);
  };

  return (
    <div className="flex items-center space-x-2 float-right">
      {label && <span className="text-2xs font-open-sans pr-6">{label}</span>}
      <select
        value={value}
        onChange={handleChange}
        className="appearance-none text-2xs font-bold font-medium font-open-sans text-secondary bg-transparent pr-[4rem] lg:pr-[7rem] focus:outline-none border-b border-gray-300 cursor-pointer"
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

export default Select;
