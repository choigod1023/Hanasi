import { ButtonVariant, ButtonSize } from "../constants/ui";

export const buttonBaseStyles = "transition-all rounded-full font-medium";

export const buttonVariantStyles: Record<ButtonVariant, string> = {
  primary: "bg-romantic-text text-white hover:bg-romantic-title",
  secondary: "bg-white/50 text-romantic-subtitle hover:bg-soft-pink",
  ghost: "hover:bg-soft-pink",
  filter: "bg-white/80 text-romantic-subtitle hover:bg-soft-pink",
  nav: "text-romantic-400 hover:text-romantic-500",
};

export const buttonActiveStyles: Partial<Record<ButtonVariant, string>> = {
  filter: "bg-soft-rose font-medium text-romantic-text shadow-sm",
  nav: "text-romantic-600",
};

export const buttonSizeStyles: Record<ButtonSize, string> = {
  sm: "px-2 py-1 text-xs",
  md: "px-4 py-2 text-sm",
  lg: "px-6 py-3 text-base",
};
