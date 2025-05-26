
import React from 'react';

interface ButtonProps {
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "danger" | "ghost";
  className?: string;
  disabled?: boolean;
  isLoading?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  onClick,
  type = "button",
  children,
  variant = "primary",
  className,
  disabled = false,
  isLoading = false,
}) => {
  const baseStyles = "px-6 py-3 font-semibold rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-neutral-darker transition duration-150 ease-in-out transform active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center";
  
  let variantStyles = "";
  switch (variant) {
    case "primary":
      variantStyles = "bg-primary text-white hover:bg-primary-dark focus:ring-primary";
      break;
    case "secondary":
      variantStyles = "bg-secondary text-white hover:bg-secondary-dark focus:ring-secondary";
      break;
    case "danger":
      variantStyles = "bg-red-600 text-white hover:bg-red-700 focus:ring-red-500";
      break;
    case "ghost":
      variantStyles = "bg-transparent text-primary-light hover:bg-primary/10 focus:ring-primary";
      break;
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${baseStyles} ${variantStyles} ${className}`}
      disabled={disabled || isLoading}
    >
      {isLoading ? (
        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
      ) : children}
    </button>
  );
};

export default Button;
    