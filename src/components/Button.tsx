import { Link } from "react-router-dom";
import "./Button.css";

type ButtonProps = {
  children: React.ReactNode;
  href?: string;
  to?: string;
  variant?: "primary" | "secondary" | "ghost";
  type?: "button" | "submit";
  onClick?: () => void;
  className?: string;
  external?: boolean;
};

export function Button({
  children,
  href,
  to,
  variant = "primary",
  type = "button",
  onClick,
  className = "",
  external = false,
}: ButtonProps) {
  const classes = `btn btn-${variant} ${className}`.trim();

  if (to) {
    return (
      <Link className={classes} to={to}>
        {children}
      </Link>
    );
  }

  if (href) {
    return (
      <a
        className={classes}
        href={href}
        target={external ? "_blank" : undefined}
        rel={external ? "noreferrer" : undefined}
      >
        {children}
      </a>
    );
  }

  return (
    <button className={classes} type={type} onClick={onClick}>
      {children}
    </button>
  );
}
