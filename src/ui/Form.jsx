// function Form({ type = "regular", className = "", ...props }) {
//   const baseClasses = "overflow-hidden text-[1.4rem]";

//   let variantClasses = "";
//   if (type === "regular") {
//     variantClasses =
//       "p-[1.4rem] px-[4rem] bg-gray-50 border border-solid border-gray-100 rounded-lg";
//   } else if (type === "modal") {
//     variantClasses = "w-[80rem]";
//   }

//   return (
//     <form
//       className={`${baseClasses} ${variantClasses} ${className}`}
//       {...props}
//     />
//   );
// }

function Form({ type = "regular", className = "", ...props }) {
  const baseClasses = "overflow-x-auto text-base sm:text-[1.4rem] max-w-full"; // Smaller base text (16px), scales up; prevent overflow

  let variantClasses = "";
  if (type === "regular") {
    variantClasses =
      "p-4 px-6 sm:p-[1.4rem] sm:px-[4rem] bg-gray-50 border border-solid border-gray-100 rounded-lg"; // Reduced padding on small screens
  } else if (type === "modal") {
    variantClasses = "w-full sm:w-[80rem] mx-auto"; // Full width on small, fixed on sm+
  }

  return (
    <form
      className={`${baseClasses} ${variantClasses} ${className}`}
      {...props}
    />
  );
}

export default Form;
