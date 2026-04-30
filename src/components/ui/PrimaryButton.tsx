// src/components/ui/PrimaryButton.tsx
import Link from "next/link";
import { ReactNode } from "react";

type BaseProps = {
  children: ReactNode;
  icon?: string;
  className?: string;
  size?: "sm" | "md" | "lg";
};

type AnchorProps = BaseProps & React.AnchorHTMLAttributes<HTMLAnchorElement> & { href: string };
type ButtonProps = BaseProps & React.ButtonHTMLAttributes<HTMLButtonElement> & { href?: never; type?: "button" | "submit" | "reset" };

type PrimaryButtonProps = AnchorProps | ButtonProps;

export default function PrimaryButton({
  href,
  children,
  icon = "arrow_forward",
  className = "",
  size = "md",
  ...props
}: PrimaryButtonProps) {
  const sizeStyles = {
    sm: "h-9 px-4 text-xs",
    md: "h-11 px-6 text-sm",
    lg: "h-14 px-8 text-base",
  };

  const styles = `inline-flex items-center justify-center rounded-lg cursor-pointer ${sizeStyles[size]} bg-primary text-white hover:bg-primary-dark font-bold transition-all shadow-md group/btn ${className}`;

  const content = (
    <>
      {children}
      {icon && (
        <span
          className={`${size === "lg" ? "text-xl" : "text-lg"} ml-2 group-hover/btn:translate-x-1 transition-transform material-symbols-outlined`}
        >
          {icon}
        </span>
      )}
    </>
  );

  if (href) {
    return (
      <Link href={href} className={styles} {...(props as any)}>
        {content}
      </Link>
    );
  }

  const { type = "button", ...buttonProps } = props as any;

  return (
    <button type={type} className={styles} {...buttonProps}>
      {content}
    </button>
  );
}
