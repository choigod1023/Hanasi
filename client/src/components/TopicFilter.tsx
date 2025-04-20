// src/components/TopicFilter.tsx
import React from "react";
import { useTopicStore } from "../store/useTopicStore";
import { RelationType, MoodType, SituationType } from "../types/topic";

const relationships: RelationType[] = ["썸", "연애", "친구", "어색한 사이"];
const moods: MoodType[] = ["설렘", "지루함", "진지함", "장난"];
const situations: SituationType[] = ["첫 만남", "고백 전", "싸운 후", "일상"];

export const TopicFilter: React.FC = () => {
  const { filter, setFilter } = useTopicStore();

  return (
    <div className="space-y-6 p-4">
      <div>
        <label className="block text-sm font-medium text-romantic-title mb-1">
          관계 단계
        </label>
        <div className="mt-2 grid grid-cols-2 gap-2 sm:grid-cols-4">
          {relationships.map((rel) => (
            <button
              key={rel}
              onClick={() => setFilter({ relationship: rel })}
              className={`rounded-lg px-4 py-2 text-sm transition-all ${
                filter.relationship === rel
                  ? "bg-soft-rose font-medium text-romantic-text shadow-sm"
                  : "bg-white/80 text-romantic-subtitle hover:bg-soft-pink hover:text-romantic-text"
              }`}
            >
              {rel}
            </button>
          ))}
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-romantic-title mb-1">
          감정
        </label>
        <div className="mt-2 grid grid-cols-2 gap-2 sm:grid-cols-4">
          {moods.map((mood) => (
            <button
              key={mood}
              onClick={() => setFilter({ mood })}
              className={`rounded-lg px-4 py-2 text-sm transition-all ${
                filter.mood === mood
                  ? "bg-soft-lavender font-medium text-romantic-text shadow-sm"
                  : "bg-white/80 text-romantic-subtitle hover:bg-soft-lavender hover:text-romantic-text"
              }`}
            >
              {mood}
            </button>
          ))}
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-romantic-title mb-1">
          상황
        </label>
        <div className="mt-2 grid grid-cols-2 gap-2 sm:grid-cols-4">
          {situations.map((situation) => (
            <button
              key={situation}
              onClick={() => setFilter({ situation })}
              className={`rounded-lg px-4 py-2 text-sm transition-all ${
                filter.situation === situation
                  ? "bg-soft-peach font-medium text-romantic-text shadow-sm"
                  : "bg-white/80 text-romantic-subtitle hover:bg-soft-peach hover:text-romantic-text"
              }`}
            >
              {situation}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
