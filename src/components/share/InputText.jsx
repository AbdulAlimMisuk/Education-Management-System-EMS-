export default function InputText({
  label,
  placeholder,
  type = "text",
  rows,
  ...props
}) {
  return (
    <>
      {label && (
        <label className="block text-sm sm:text-base font-medium text-gray-700 mb-1 sm:mb-2">
          {label}
        </label>
      )}

      <input
        {...props}
        type={type}
        rows={rows}
        className="
          w-full 
          px-3 sm:px-4 
          py-2.5 sm:py-3 
          text-sm sm:text-base
          border border-gray-300 
          rounded-xl 
          focus:ring-2 focus:ring-blue-500 
          focus:border-transparent 
          transition-all duration-300
        "
        placeholder={placeholder}
      />
    </>
  );
}
