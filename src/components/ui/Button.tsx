import Link from "next/link";
import React from "react";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "outline" | "ghost" | "secondary";
  sizes?: "sm" | "md" | "lg";
  href?: string;
  icon?: string;
  className?: string;
  children: React.ReactNode;
};

export default function Button({
  variant = "primary",
  sizes = "md",
  href,
  icon,
  className = "",
  children,
  ...props
}: ButtonProps) {
  const baseStyles =
    "flex items-center justify-center rounded font-bold transition-all whitespace-nowrap gap-2";

  const variants = {
    primary: "bg-primary hover:bg-primary-dark text-white shadow-sm",
    secondary: "bg-slate-800 hover:bg-slate-900 text-white shadow-sm",
    outline:
      "bg-white  border border-slate-300  text-slate-700  hover:bg-slate-50 ",
    ghost: "bg-transparent text-primary hover:bg-primary/10",
  };

  const sz = {
    sm: "h-10 px-4 text-sm",
    md: "h-12 px-6 text-base",
    lg: "h-14 px-10 text-lg",
  };

  const classes = `${baseStyles} ${variants[variant]} ${sz[sizes]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
        {icon && (
          <span className="material-symbols-outlined text-lg">{icon}</span>
        )}
      </Link>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
      {icon && (
        <span className="material-symbols-outlined text-lg">{icon}</span>
      )}
    </button>
  );
}
