import { FilterButton } from "../../ui/FilterButton";
import { FilterProps } from "../../../types/filter";
import { filterStyles } from "../../../styles/filter";

export const Filter = ({
  type,
  values,
  currentValue,
  onSelect,
}: FilterProps) => {
  const styles = filterStyles[type];

  return (
    <div className="grid grid-cols-2 gap-2 mt-2 sm:grid-cols-4">
      {values.map((value) => (
        <FilterButton
          key={value}
          value={value}
          isSelected={currentValue === value}
          onClick={() => onSelect(value)}
          selectedBg={styles.selectedBg}
          hoverBg={styles.hoverBg}
        />
      ))}
    </div>
  );
};
