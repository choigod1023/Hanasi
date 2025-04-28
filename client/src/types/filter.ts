import { FilterType, FilterValue } from "../constants/topic";

export interface FilterSectionProps {
  label: string;
  type: FilterType;
  values: readonly string[];
  currentValue: string | null;
  onSelect: (value: string) => void;
}

export interface FilterComponentProps {
  values: string[];
  currentValue: string | null;
  onSelect: (value: string) => void;
}

export interface FilterProps {
  type: FilterType;
  values: readonly string[];
  currentValue: string | null;
  onSelect: (value: string) => void;
}

export interface FilterStyles {
  selectedBg: string;
  hoverBg: string;
}

export interface BaseFilterButtonProps {
  value: FilterValue;
  onClick: () => void;
  bgColor: string;
}

export interface FilterButtonProps {
  value: FilterValue;
  isSelected: boolean;
  onClick: () => void;
  selectedBg: string;
  hoverBg: string;
}
