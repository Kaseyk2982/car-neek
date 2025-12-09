export default function ButtonIcon({ children, onClick }) {
  return (
    <button
      onClick={onClick}
      className="bg-none border-0 p-2 rounded-sm transition-all"
    >
      {children}
    </button>
  );
}
