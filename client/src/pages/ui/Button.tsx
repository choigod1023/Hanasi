import React from "react";
import { match, P } from "ts-pattern";
import { ButtonProps } from "../../types/ui";
import {
  buttonBaseStyles,
  buttonVariantStyles,
  buttonActiveStyles,
  buttonSizeStyles,
} from "../../styles/button";

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
  const variantStyle = isActive
    ? buttonActiveStyles[variant] || buttonVariantStyles[variant]
    : buttonVariantStyles[variant];

  return (
    <button
      className={`${buttonBaseStyles} ${variantStyle} ${buttonSizeStyles[size]} ${className} flex items-center`}
      disabled={isLoading}
      {...props}
    >
      {match({ isLoading, icon })
        .with({ isLoading: true }, () => (
          <div className="flex items-center justify-center">
            <div className="w-4 h-4 mr-2 border-2 border-white rounded-full border-t-transparent animate-spin" />
            {children}
          </div>
        ))
        .with({ isLoading: false, icon: P.not(P.nullish) }, () => (
          <>
            <span className="mr-2">{icon}</span>
            {children}
          </>
        ))
        .with({ isLoading: false }, () => children)
        .exhaustive()}
    </button>
  );
};
