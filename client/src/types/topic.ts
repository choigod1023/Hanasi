// src/types/topic.ts

import {
  FilterType,
  FilterValue,
  RelationshipType,
  MoodType,
  SituationType,
} from "../constants/topic";

export interface Topic {
  id: string;
  title: string;
  description: string;
  content: string;
  relationship: string;
  mood: string;
  situation: string;
  createdAt: string;
  updatedAt: string;
}

export interface TopicState {
  topics: Topic[];
  currentTopic: Topic | null;
  loading: boolean;
  error: string | null;
  filter: TopicFilter;
  settings: {
    gptMode: boolean;
  };
  setFilter: (filter: Partial<TopicFilter>) => void;
  setSettings: (settings: Partial<TopicState["settings"]>) => void;
  toggleGptMode: () => void;
}

export interface TopicAction {
  type: string;
  payload?:
    | Topic
    | string
    | { relationship: string; mood: string; situation: string };
}

export interface FilterSectionProps {
  label: string;
  type: "relationship" | "mood" | "situation";
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
  onFavorite: (id: string) => void;
  isFavorite: boolean;
}

export interface TopicCardsProps {
  topics: Topic[];
  onFavorite: (id: string) => void;
  favorites: string[];
}

export interface TopicActionsProps {
  topic: Topic;
  isFavorite: boolean;
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

export interface TopicContentProps {
  settings: {
    gptMode: boolean;
  };
  isGptLoading: boolean;
  isGptError: boolean;
  gptTopic: string | null;
  randomTopic: Topic | null;
  isFilterComplete: boolean;
  filter: TopicFilter;
  onFavorite: (id: string) => void;
  isFavorite: (id: string) => boolean;
}
