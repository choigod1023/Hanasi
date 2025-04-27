import { FilterSectionProps } from "../../../types/topic";

const FilterButton = ({
  value,
  isSelected,
  onClick,
  selectedBg,
  hoverBg,
}: {
  value: string;
  isSelected: boolean;
  onClick: () => void;
  selectedBg: string;
  hoverBg: string;
}) => (
  <button
    onClick={onClick}
    className={`rounded-lg px-4 py-2 text-sm transition-all ${
      isSelected
        ? `${selectedBg} font-medium text-romantic-text shadow-sm`
        : "bg-white/80 text-romantic-subtitle hover:text-romantic-text"
    } hover:${hoverBg}`}
  >
    {value}
  </button>
);

const RelationshipFilter = ({
  values,
  currentValue,
  onSelect,
}: Omit<FilterSectionProps, "label" | "type">) => (
  <div className="grid grid-cols-2 gap-2 mt-2 sm:grid-cols-4">
    {values.map((value) => (
      <FilterButton
        key={value}
        value={value}
        isSelected={currentValue === value}
        onClick={() => onSelect(value)}
        selectedBg="bg-soft-rose"
        hoverBg="bg-soft-pink"
      />
    ))}
  </div>
);

const MoodFilter = ({
  values,
  currentValue,
  onSelect,
}: Omit<FilterSectionProps, "label" | "type">) => (
  <div className="grid grid-cols-2 gap-2 mt-2 sm:grid-cols-4">
    {values.map((value) => (
      <FilterButton
        key={value}
        value={value}
        isSelected={currentValue === value}
        onClick={() => onSelect(value)}
        selectedBg="bg-soft-lavender"
        hoverBg="bg-soft-lavender"
      />
    ))}
  </div>
);

const SituationFilter = ({
  values,
  currentValue,
  onSelect,
}: Omit<FilterSectionProps, "label" | "type">) => (
  <div className="grid grid-cols-2 gap-2 mt-2 sm:grid-cols-4">
    {values.map((value) => (
      <FilterButton
        key={value}
        value={value}
        isSelected={currentValue === value}
        onClick={() => onSelect(value)}
        selectedBg="bg-soft-peach"
        hoverBg="bg-soft-peach"
      />
    ))}
  </div>
);

export const FilterSection = ({
  label,
  type,
  values,
  currentValue,
  onSelect,
}: FilterSectionProps) => {
  const renderFilter = () => {
    switch (type) {
      case "relationship":
        return (
          <RelationshipFilter
            values={values}
            currentValue={currentValue}
            onSelect={onSelect}
          />
        );
      case "mood":
        return (
          <MoodFilter
            values={values}
            currentValue={currentValue}
            onSelect={onSelect}
          />
        );
      case "situation":
        return (
          <SituationFilter
            values={values}
            currentValue={currentValue}
            onSelect={onSelect}
          />
        );
    }
  };

  return (
    <div>
      <label className="block mb-1 text-sm font-medium text-romantic-title">
        {label}
      </label>
      {renderFilter()}
    </div>
  );
};
