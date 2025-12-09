/**
 * Row component converted from styled-components to Tailwind utilities.
 * Original behavior:
 * - display: flex
 * - type === 'horizontal' -> justify-content: space-between; align-items: center;
 * - type === 'vertical' -> flex-direction: column; gap: 1.6rem;
 */
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
