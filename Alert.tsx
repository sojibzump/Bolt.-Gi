
import React from 'react';

interface AlertProps {
  message: string;
  type: "error" | "success" | "info";
  onClose?: () => void;
}

const Alert: React.FC<AlertProps> = ({ message, type, onClose }) => {
  let bgColor = "";
  let textColor = "";
  let borderColor = "";

  switch (type) {
    case "error":
      bgColor = "bg-red-900";
      textColor = "text-red-100";
      borderColor = "border-red-700";
      break;
    case "success":
      bgColor = "bg-green-900";
      textColor = "text-green-100";
      borderColor = "border-green-700";
      break;
    case "info":
    default:
      bgColor = "bg-blue-900";
      textColor = "text-blue-100";
      borderColor = "border-blue-700";
      break;
  }

  return (
    <div className={`p-4 mb-4 border-l-4 ${borderColor} ${bgColor} ${textColor} rounded-md shadow-md flex justify-between items-center transition-all duration-300 ease-in-out`} role="alert">
      <p>{message}</p>
      {onClose && (
        <button
          onClick={onClose}
          className={`ml-4 p-1 rounded-full hover:bg-opacity-20 hover:bg-white transition-colors duration-150`}
          aria-label="Close alert"
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path>
          </svg>
        </button>
      )}
    </div>
  );
};

export default Alert;
    