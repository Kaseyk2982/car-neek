export default function FormRow({ error, label, children }) {
  return (
    <div className="grid items-center grid-cols-[24rem_1fr_1fr] gap-6 py-5 px-0 first:pt-0 last:pb-0">
      <label className="font-semibold" htmlFor={children.props.id}>
        {label}
      </label>
      {children}
      <span className="text-xl text-red-700">{error}</span>
    </div>
  );
}
