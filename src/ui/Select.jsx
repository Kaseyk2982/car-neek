export default function Select({ options, onChange, value, ...props }) {
  return (
    <select
      className="text-2xl py-3 px-5 border border-solid rounded-md bg-gray-200 text-gray-600 font-semibold shadow-sm option-highlight-indigo"
      onChange={onChange}
      value={value}
      {...props}
    >
      {options.map((option) => (
        <option value={option.value} key={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
}
