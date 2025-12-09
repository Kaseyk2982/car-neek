export default function FormRowVertical({ label, children, error }) {
  return (
    <div className="grid items-center grid-cols-[38rem] gap-2 py-5 px-0 first:pt-0 last:pb-0">
      <label className="font-semibold" htmlFor={children.props.id}>
        {label}
      </label>
      {children}
      <span className="text-xl text-red-700">{error}</span>
    </div>
  );
}
