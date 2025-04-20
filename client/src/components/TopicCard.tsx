// src/components/TopicCard.tsx
import React from "react";
import { Topic } from "../types/topic";
import { useTopicStore } from "../store/useTopicStore";
import { HeartIcon, ShareIcon } from "@heroicons/react/24/outline";
import { HeartIcon as HeartSolidIcon } from "@heroicons/react/24/solid";

interface TopicCardProps {
  topic: Topic;
}

export const TopicCard = ({ topic }: TopicCardProps) => {
  const { favorites, addToFavorites, removeFromFavorites } = useTopicStore();
  const isFavorite = favorites.some((f) => f.id === topic.id);

  if (!topic) {
    return (
      <div className="h-48 rounded-xl bg-white/50 backdrop-blur-sm p-6 shadow-lg">
        <p className="text-romantic-text text-center">
          선택한 조건에 맞는 주제가 없습니다.
        </p>
      </div>
    );
  }

  return (
    <div className="h-48 rounded-xl bg-white/50 backdrop-blur-sm p-6 shadow-lg transition-all hover:shadow-xl hover:scale-[1.02]">
      <div className="mb-4 flex flex-wrap gap-2">
        <span className="rounded-full bg-soft-rose px-3 py-1 text-sm text-romantic-text">
          {topic.relationship}
        </span>
        <span className="rounded-full bg-soft-lavender px-3 py-1 text-sm text-romantic-text">
          {topic.mood}
        </span>
        <span className="rounded-full bg-soft-peach px-3 py-1 text-sm text-romantic-text">
          {topic.situation}
        </span>
      </div>
      <p className="line-clamp-2 text-romantic-text">{topic.content}</p>

      <div className="mt-4 flex items-center justify-between">
        <div className="flex space-x-2 text-sm text-romantic-subtitle">
          <span>{topic.relationship}</span>
          <span>•</span>
          <span>{topic.mood}</span>
          <span>•</span>
          <span>{topic.situation}</span>
        </div>

        <div className="flex space-x-2">
          <button
            onClick={() => {
              if (isFavorite) {
                removeFromFavorites(topic.id);
              } else {
                addToFavorites(topic);
              }
            }}
            className="rounded-full p-2 hover:bg-soft-pink transition-colors"
          >
            {isFavorite ? (
              <HeartSolidIcon className="h-6 w-6 text-romantic-text" />
            ) : (
              <HeartIcon className="h-6 w-6 text-romantic-subtitle" />
            )}
          </button>

          <button
            onClick={async () => {
              try {
                await navigator.clipboard.writeText(topic.content);
                alert("주제가 클립보드에 복사되었습니다!");
              } catch (err) {
                console.error("복사 실패:", err);
              }
            }}
            className="rounded-full p-2 hover:bg-soft-pink transition-colors"
          >
            <ShareIcon className="h-6 w-6 text-romantic-subtitle" />
          </button>
        </div>
      </div>
    </div>
  );
};
