// import { twMerge } from "tailwind-merge";

function Form({ type = "regular", className = "", ...props }) {
  // Base styles applied to all variants
  const baseClasses = "overflow-hidden text-[1.4rem]";

  // Variant-specific classes
  let variantClasses = "";
  if (type === "regular") {
    variantClasses =
      "p-[1.4rem] px-[4rem] bg-gray-50 border border-solid border-gray-100 rounded-lg";
  } else if (type === "modal") {
    variantClasses = "w-[80rem]";
  }

  // Combine classes (use twMerge if you have it to handle overrides cleanly)
  // const combinedClasses = twMerge(baseClasses, variantClasses, className);

  return (
    <form
      className={`${baseClasses} ${variantClasses} ${className}`}
      {...props}
    />
  );
}

export default Form;
