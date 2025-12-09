const sizesMap = {
  xs: "text-lg py-2 px-2 uppercase font-medium text-center",
  small: "text-lg py-1.5 px-3 uppercase font-semibold text-center",
  medium: "text-xl py-5 px-6 font-semibold",
  large: "text-2xl py-5 px-10 font-semibold",
};

const variationsMap = {
  primary: "text-indigo-100 bg-indigo-600 hover:bg-indigo-700",
  secondary:
    "text-gray-600 bg-gray-100 border border-solid border-gray-200 hover:bg-gray-200",
  danger: "text-red-100 bg-red-700 hover:bg-red-800",
};

export default function Button({
  children,
  onClick,
  variation = "primary",
  size = "medium",
  className = "",
  type = "submit",
  ...props
}) {
  const sizeClasses = sizesMap[size] || sizesMap.medium;
  const variationClasses = variationsMap[variation] || variationsMap.primary;

  return (
    <button
      onClick={onClick}
      type={type}
      className={`${variationClasses} ${sizeClasses} ${className} border-0 rounded-md shadow-sm transition-all duration-200`}
      {...props}
    >
      {children}
    </button>
  );
}
