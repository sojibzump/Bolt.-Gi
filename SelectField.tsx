
import React from 'react';

interface SelectFieldProps<T extends string | number> {
  label: string;
  id: string;
  value: T;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  options: { value: T; label: string }[];
  className?: string;
  required?: boolean;
}

const SelectField = <T extends string | number,>({
  label,
  id,
  value,
  onChange,
  options,
  className,
  required = false,
}: SelectFieldProps<T>): React.ReactElement => {
  return (
    <div className={`mb-4 ${className}`}>
      <label htmlFor={id} className="block text-sm font-medium text-neutral-light mb-1">
        {label} {required && <span className="text-red-400">*</span>}
      </label>
      <select
        id={id}
        name={id}
        value={value}
        onChange={onChange}
        required={required}
        className="w-full px-4 py-2.5 bg-neutral-dark border border-neutral-dark text-neutral-light rounded-md shadow-sm focus:ring-2 focus:ring-primary focus:border-primary transition duration-150 ease-in-out"
      >
        {options.map((option) => (
          <option key={option.value} value={option.value} className="bg-neutral-dark text-neutral-light">
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectField;
    