import { twMerge } from "tailwind-merge";

const Button = ({
  color = "primary",
  variant = "filled",
  size = "large",
  children,
  className,
}) => {
  const colors = {
    primary: "bg-primary text-white hover:bg-primary/80 border border-primary",
    secondary:
      "bg-secondary text-white hover:bg-secondary/80 border border-secondary",
    accent: "bg-accent text-white hover:bg-accent/80 border border-accent",
    warning: "bg-warning text-white hover:bg-warning/80 border border-warning",
  };
  const variants = {
    filled: "",
    outlined: "border bg-transparent",
  };
  const buttonSize = {
    large: "h-12 px-6 m-2 text-lg",
    regular: "h-10 px-5 m-2",
    small: "h-8 px-4 m-2",
  };
  return (
    <button
      className={twMerge(
        "",
        colors[color],
        variants[variant],
        buttonSize[size],
        className
      )}
    >
      {children}
    </button>
  );
};

export default Button;
