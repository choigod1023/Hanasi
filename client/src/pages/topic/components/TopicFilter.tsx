// src/components/TopicFilter.tsx
import React from "react";
import { useTopicStore } from "../../../store/useTopicStore";
import {
  relationships,
  moods,
  situations,
  RelationshipType,
  MoodType,
  SituationType,
} from "../../../constants/topic";
import { FilterSection } from "./FilterSection";

export const TopicFilter: React.FC = () => {
  const { filter, setFilter } = useTopicStore();

  return (
    <div className="p-4 space-y-6">
      <FilterSection
        label="관계 단계"
        type="relationship"
        values={relationships}
        currentValue={filter.relationship}
        onSelect={(value) =>
          setFilter({ relationship: value as RelationshipType })
        }
      />
      <FilterSection
        label="감정"
        type="mood"
        values={moods}
        currentValue={filter.mood}
        onSelect={(value) => setFilter({ mood: value as MoodType })}
      />
      <FilterSection
        label="상황"
        type="situation"
        values={situations}
        currentValue={filter.situation}
        onSelect={(value) => setFilter({ situation: value as SituationType })}
      />
    </div>
  );
};
