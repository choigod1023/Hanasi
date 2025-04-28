import { TopicCard } from "./TopicCard";
import { TopicCardsProps } from "../../../types/topic";

export const Cards = ({ topics, onFavorite, favorites }: TopicCardsProps) => (
  <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
    {topics.map((topic) => (
      <TopicCard
        key={topic.id}
        topic={topic}
        onFavorite={onFavorite}
        isFavorite={favorites.includes(topic.id)}
      />
    ))}
  </div>
);
