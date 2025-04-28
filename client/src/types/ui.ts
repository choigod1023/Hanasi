import { ButtonVariant, ButtonSize } from "../constants/ui";
import { Topic } from "./topic";

export interface ButtonProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  isActive?: boolean;
  icon?: React.ReactNode;
  isLoading?: boolean;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
  [key: string]:
    | string
    | number
    | boolean
    | React.ReactNode
    | undefined
    | (() => void);
}

export interface ToggleButtonProps {
  onClick: () => void;
}

export interface CardProps {
  children: React.ReactNode;
  className?: string;
  onFavorite?: () => void;
  onShare?: () => void;
  isFavorite?: boolean;
  hover?: boolean;
  topic?: Topic | null;
}
