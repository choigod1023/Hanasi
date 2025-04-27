import { cn } from "../../utils/classNames";
import { commonStyles } from "../../styles/common";

interface FilterButtonProps {
  value: string;
  isSelected: boolean;
  onClick: () => void;
  type: "relationship" | "mood" | "situation";
}

export const FilterButton = ({
  value,
  isSelected,
  onClick,
  type,
}: FilterButtonProps) => {
  const getButtonColor = () => {
    const filterType = commonStyles.filter[type];
    return isSelected ? filterType.selected : filterType.hover;
  };

  return (
    <button
      onClick={onClick}
      className={cn(
        commonStyles.button.base,
        isSelected
          ? commonStyles.button.primary
          : commonStyles.button.secondary,
        !isSelected && getButtonColor()
      )}
    >
      {value}
    </button>
  );
};
