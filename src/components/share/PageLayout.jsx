import { IoMdAdd } from "react-icons/io";

export default function PageLayout({
  children,
  title,
  description,
  buttonLabel,
  form,
}) {
  return (
    <div id="students-section" className="content-section p-4 sm:p-6">
      <div className="flex items-center justify-between w-full mb-6">
        <div className="flex flex-col">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 leading-tight">
            {title}
          </h2>
          <p className="text-gray-600 text-sm sm:text-base leading-snug">
            {description}
          </p>
        </div>

        <button
          id="add-student-btn"
          className="
            bg-blue-600 text-white 
            px-4 
            rounded-xl 
            font-semibold
            hover:bg-blue-700 
            cursor-pointer 
            transition 
            flex items-center justify-center 
            space-x-2 
            shadow-lg ml-4
            h-12           
          "
          onClick={() => form.reset({ model: true })}
        >
          <IoMdAdd size={18} />
          <span className="text-sm sm:text-base">{buttonLabel}</span>
        </button>
      </div>

      {children}
    </div>
  );
}
