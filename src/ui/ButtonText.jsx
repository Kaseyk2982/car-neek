export default function ButtonText({ children, onClick }) {
  return (
    <button
      onClick={onClick}
      className="text-indigo-600 font-semibold text-center transition-all border-0 bg-none rounded-sm hover:text-indigo-700 active:text-indigo-700"
    >
      {children}
    </button>
  );
}
