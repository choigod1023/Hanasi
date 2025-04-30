import { Topic } from "./topic";

export interface FavoriteState {
  favorites: Topic[];
  addFavorite: (topic: Topic) => void;
  removeFavorite: (topicId: string) => void;
}

export interface FavoritesListProps {
  favorites: Topic[];
  onFavorite: (id: string) => void;
  isAdding: boolean;
  isRemoving: boolean;
}
