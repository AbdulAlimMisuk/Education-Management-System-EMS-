import React from "react";
import { RiCloseLargeLine } from "react-icons/ri";

export default function BasicModel({ form, header, children, size = "w-full" }) {
  return (
    <>
      {form.watch("model") && (
        <div className="fixed inset-0 flex items-center justify-center z-50 px-4">
          <div
            className={`
              relative bg-white rounded-2xl shadow-2xl 
              w-full 
              sm:w-auto
              max-w-sm sm:max-w-md lg:max-w-2xl
              ${size}
              transform transition-all duration-300 ease-out
            `}
          >
            <div className="flex justify-between items-center border-b p-4 sm:p-5">
              <h2 className="text-base sm:text-lg font-semibold text-gray-800">
                {header}
              </h2>

              <button
                onClick={() => form.setValue("model", false)}
                className="text-gray-500 hover:text-gray-700 text-xl sm:text-2xl cursor-pointer"
              >
                <RiCloseLargeLine />
              </button>
            </div>

            <div className="max-h-[70vh] overflow-y-auto p-4 sm:p-6">
              {children}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
