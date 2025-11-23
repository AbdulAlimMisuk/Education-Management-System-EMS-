import React from "react";

export default function PrimaryButton({
  type,
  label,
  bgColor = "bg-blue-600",
}) {
  return (
    <button
      type={type}
      className={`
        w-full 
        ${bgColor}  
        text-white 
        py-2.5 sm:py-3 
        px-3 sm:px-4 
        text-sm sm:text-base
        rounded-xl 
        font-semibold 
        hover:bg-blue-700 
        focus:ring-4 focus:ring-blue-200 
        transition-all duration-300
      `}
    >
      {label}
    </button>
  );
}
