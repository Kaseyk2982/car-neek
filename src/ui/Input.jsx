import { forwardRef } from "react";

const Input = forwardRef(({ type, id, ...props }, ref) => {
  return (
    <input
      ref={ref}
      type={type}
      id={id}
      {...props}
      className="border rounded-sm shadow-sm py-3 px-5 bg-gray-50"
    />
  );
});
Input.displayName = "Input";
export default Input;
