import { FilterSectionProps } from "../../../types/filter";
import { Filter } from "./Filter";

export const FilterSection = ({
  label,
  type,
  values,
  currentValue,
  onSelect,
}: FilterSectionProps) => {
  return (
    <div>
      <label className="block mb-1 text-sm font-medium text-romantic-title">
        {label}
      </label>
      <Filter
        type={type}
        values={values}
        currentValue={currentValue}
        onSelect={onSelect}
      />
    </div>
  );
};
