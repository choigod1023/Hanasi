import { TopicCard } from "../../topic/components/TopicCard";
import { FavoritesListProps } from "../../../types/favorite";

export const FavoritesList = ({
  favorites,
  onFavorite,
}: FavoritesListProps) => {
  if (favorites.length === 0) {
    return (
      <div className="max-w-2xl p-6 mx-auto mt-8 text-center shadow-lg rounded-xl bg-white/50 backdrop-blur-sm">
        <p className="text-romantic-text">아직 저장된 주제가 없습니다.</p>
      </div>
    );
  }

  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {favorites.map((topic) => (
        <TopicCard
          key={topic.id}
          topic={topic}
          onFavorite={onFavorite}
          isFavorite={true}
        />
      ))}
    </div>
  );
};
