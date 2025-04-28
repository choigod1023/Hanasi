import { FilterProps, FilterStyles } from "../types/filter";

export const filterStyles: Record<FilterProps["type"], FilterStyles> = {
  relationship: {
    selectedBg: "bg-soft-rose",
    hoverBg: "bg-soft-pink",
  },
  mood: {
    selectedBg: "bg-soft-lavender",
    hoverBg: "bg-soft-lavender",
  },
  situation: {
    selectedBg: "bg-soft-peach",
    hoverBg: "bg-soft-peach",
  },
};
