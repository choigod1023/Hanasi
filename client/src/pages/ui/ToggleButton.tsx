import { ToggleButtonProps } from "../../types/ui";

export const ToggleOnButton = ({ onClick }: ToggleButtonProps) => (
  <button
    onClick={onClick}
    className="px-4 py-2 text-sm font-medium text-white transition-all rounded-full shadow-md bg-romantic-text"
  >
    ON
  </button>
);

export const ToggleOffButton = ({ onClick }: ToggleButtonProps) => (
  <button
    onClick={onClick}
    className="px-4 py-2 text-sm font-medium transition-all rounded-full bg-white/50 text-romantic-subtitle hover:bg-soft-pink"
  >
    OFF
  </button>
);
