import React from "react";
import { match } from "ts-pattern";

type ButtonVariant = "primary" | "secondary" | "ghost" | "filter" | "nav";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  isActive?: boolean;
  icon?: React.ReactNode;
  isLoading?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  size = "md",
  isActive = false,
  icon,
  isLoading = false,
  children,
  className = "",
  ...props
}) => {
  const baseStyles = "transition-all rounded-full font-medium";

  const variantStyles = match({ variant, isActive })
    .with(
      { variant: "primary" },
      () => "bg-romantic-text text-white hover:bg-romantic-title"
    )
    .with(
      { variant: "secondary" },
      () => "bg-white/50 text-romantic-subtitle hover:bg-soft-pink"
    )
    .with({ variant: "ghost" }, () => "hover:bg-soft-pink")
    .with({ variant: "filter" }, () =>
      isActive
        ? "bg-soft-rose font-medium text-romantic-text shadow-sm"
        : "bg-white/80 text-romantic-subtitle hover:bg-soft-pink"
    )
    .with({ variant: "nav" }, () =>
      isActive
        ? "text-romantic-600"
        : "text-romantic-400 hover:text-romantic-500"
    )
    .exhaustive();

  const sizeStyles = match(size)
    .with("sm", () => "px-2 py-1 text-xs")
    .with("md", () => "px-4 py-2 text-sm")
    .with("lg", () => "px-6 py-3 text-base")
    .exhaustive();

  return (
    <button
      className={`${baseStyles} ${variantStyles} ${sizeStyles} ${className} flex items-center`}
      disabled={isLoading}
      {...props}
    >
      {isLoading ? (
        <div className="flex items-center justify-center">
          <div className="w-4 h-4 mr-2 border-2 border-white rounded-full border-t-transparent animate-spin" />
          {children}
        </div>
      ) : (
        <>
          {icon && <span className="mr-2">{icon}</span>}
          {children}
        </>
      )}
    </button>
  );
};
