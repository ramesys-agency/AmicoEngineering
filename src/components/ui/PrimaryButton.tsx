// src/components/ui/PrimaryButton.tsx
import Link from "next/link";
import { ReactNode } from "react";

interface PrimaryButtonProps {
  href?: string;
  onClick?: () => void;
  children: ReactNode;
  icon?: string;
  className?: string;
  type?: "button" | "submit" | "reset";
  size?: "sm" | "md" | "lg";
}

export default function PrimaryButton({
  href,
  onClick,
  children,
  icon = "arrow_forward",
  className = "",
  type = "button",
  size = "md",
}: PrimaryButtonProps) {
  const sizeStyles = {
    sm: "h-9 px-4 text-xs",
    md: "h-11 px-6 text-sm",
    lg: "h-14 px-8 text-base",
  };

  const styles = `inline-flex items-center justify-center rounded-lg ${sizeStyles[size]} bg-primary text-white hover:bg-primary-dark font-bold transition-all shadow-md group/btn ${className}`;

  const content = (
    <>
      {children}
      {icon && (
        <span className={`${size === "lg" ? "text-xl" : "text-lg"} ml-2 group-hover/btn:translate-x-1 transition-transform material-symbols-outlined`}>
          {icon}
        </span>
      )}
    </>
  );

  if (href) {
    return (
      <Link href={href} className={styles}>
        {content}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={styles}>
      {content}
    </button>
  );
}
