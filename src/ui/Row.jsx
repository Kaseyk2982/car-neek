export default function Row({
  type = "vertical",
  children,
  className = "",
  ...rest
}) {
  const base = "flex";
  const variant =
    type === "horizontal" ? "justify-between items-center" : "flex-col gap-4";

  // Merge classes (order: base, variant, user-supplied className)
  const classes = `${base} ${variant} ${className}`.trim();

  return (
    <div className={classes} {...rest}>
      {children}
    </div>
  );
}
