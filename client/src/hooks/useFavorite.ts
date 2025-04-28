import { Topic } from "../types/topic";
import { favoriteStore } from "../store/FavoriteStore";

export const useFavorite = (topic: Topic | null) => {
  const { favorites, addFavorite, removeFavorite } = favoriteStore();

  const handleFavorite = () => {
    if (!topic) return;

    const isCurrentlyFavorite = favorites.some((f) => f.id === topic.id);
    if (isCurrentlyFavorite) {
      removeFavorite(topic.id);
    } else {
      addFavorite(topic);
    }
  };

  const isFavorite = (id: string) => favorites.some((f) => f.id === id);

  return {
    handleFavorite,
    isFavorite,
  };
};
