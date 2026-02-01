export default function FormRow({ error, label, children }) {
  return (
    <div className="grid grid-cols-1 gap-3 py-4 px-0 first:pt-0 last:pb-0 sm:gap-6 sm:py-5 sm:items-center sm:grid-cols-[24rem_1fr_1fr]">
      <label className="font-semibold" htmlFor={children.props.id}>
        {label}
      </label>
      {children}
      <span className="text-sm text-red-700 sm:text-xl">{error}</span>
    </div>
  );
}
