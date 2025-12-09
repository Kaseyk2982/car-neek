export default function Heading({
  as = "h1",
  center = false,
  className = "",
  children,
  ...rest
}) {
  const Tag = as;

  const sizeClasses =
    as === "h1"
      ? "text-[3rem] font-semibold"
      : as === "h2"
      ? "text-[2rem] font-semibold"
      : as === "h3"
      ? "text-[2rem] font-medium"
      : "text-[2rem] font-semibold";

  const alignment = center ? "text-center" : "";

  const classes =
    `${sizeClasses} leading-[1.4] ${alignment} ${className}`.trim();

  return (
    <Tag className={classes} {...rest}>
      {children}
    </Tag>
  );
}
