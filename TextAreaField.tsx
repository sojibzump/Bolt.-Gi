
import React from 'react';

interface TextAreaFieldProps {
  label: string;
  id: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  placeholder?: string;
  rows?: number;
  className?: string;
  required?: boolean;
}

const TextAreaField: React.FC<TextAreaFieldProps> = ({
  label,
  id,
  value,
  onChange,
  placeholder,
  rows = 4,
  className,
  required = false,
}) => {
  return (
    <div className={`mb-4 ${className}`}>
      <label htmlFor={id} className="block text-sm font-medium text-neutral-light mb-1">
        {label} {required && <span className="text-red-400">*</span>}
      </label>
      <textarea
        id={id}
        name={id}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        rows={rows}
        required={required}
        className="w-full px-4 py-2.5 bg-neutral-dark border border-neutral-dark text-neutral-light rounded-md shadow-sm focus:ring-2 focus:ring-primary focus:border-primary transition duration-150 ease-in-out"
      />
    </div>
  );
};

export default TextAreaField;
    