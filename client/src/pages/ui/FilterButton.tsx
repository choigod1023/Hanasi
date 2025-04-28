import { BaseFilterButtonProps, FilterButtonProps } from "../../types/filter";

const SelectedFilterButton = ({
  value,
  onClick,
  bgColor,
}: BaseFilterButtonProps) => (
  <button
    onClick={onClick}
    className={`rounded-lg px-4 py-2 text-sm transition-all font-medium text-romantic-text shadow-sm ${bgColor}`}
  >
    {value}
  </button>
);

const UnselectedFilterButton = ({
  value,
  onClick,
  bgColor,
}: BaseFilterButtonProps) => (
  <button
    onClick={onClick}
    className={`rounded-lg px-4 py-2 text-sm transition-all text-romantic-subtitle hover:text-romantic-text bg-white/80 hover:${bgColor}`}
  >
    {value}
  </button>
);

export const FilterButton = ({
  value,
  isSelected,
  onClick,
  selectedBg,
  hoverBg,
}: FilterButtonProps) => {
  const ButtonComponent = isSelected
    ? SelectedFilterButton
    : UnselectedFilterButton;
  return (
    <ButtonComponent
      value={value}
      onClick={onClick}
      bgColor={isSelected ? selectedBg : hoverBg}
    />
  );
};
