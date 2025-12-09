import { useSearchParams } from "react-router-dom";

export default function Filter({ filterField, options }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const filterFieldValue = searchParams.get(filterField || options.at(0).value);

  function handleClick(value) {
    searchParams.set(filterField, value);
    setSearchParams(searchParams);
  }

  return (
    <div className="flex gap-2 border border-solid border-gray-100 shadow-sm p-2 rounded-md bg-gray-200 text-gray-50">
      {options.map((option) => {
        const isActive = option.value === filterFieldValue;
        return (
          <button
            className={`border-none rounded-sm font-semibold text-xl py-2 px-3 transition-all 
    ${
      isActive
        ? "bg-indigo-600 text-indigo-50"
        : "bg-gray-50 text-gray-900 hover:bg-indigo-600 hover:text-indigo-50"
    }`}
            key={option.value}
            onClick={() => handleClick(option.value)}
            disabled={isActive}
          >
            {option.label}
          </button>
        );
      })}
    </div>
  );
}
