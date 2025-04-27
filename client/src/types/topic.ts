// src/types/topic.ts
import { RelationshipType, MoodType, SituationType } from "../constants/topic";

export type FilterType = "relationship" | "mood" | "situation";
export type FilterValue = RelationshipType | MoodType | SituationType;

export interface Topic {
  id: string;
  content: string;
  relationship: RelationshipType;
  mood: MoodType;
  situation: SituationType;
}

export interface FilterSectionProps {
  label: string;
  type: FilterType;
  values: FilterValue[];
  currentValue: FilterValue | null;
  onSelect: (value: FilterValue) => void;
}

export interface TopicCardProps {
  topic: Topic | null;
  isLoading?: boolean;
  isError?: boolean;
  isPrompt?: boolean;
  isFilterComplete?: boolean;
}

export interface TopicActionsProps {
  topic: Topic;
  isFavorite: boolean;
  isAdding?: boolean;
  isRemoving?: boolean;
  onFavoriteToggle: () => void;
}

export interface TopicTagProps {
  type: FilterType;
  value: string;
  variant?: "default" | "small";
}

export interface TopicFilter {
  relationship: RelationshipType | null;
  mood: MoodType | null;
  situation: SituationType | null;
}

export interface TopicSettings {
  gptMode: boolean;
}
