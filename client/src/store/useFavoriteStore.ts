import { create } from "zustand";
import { Topic } from "../types/topic";

interface FavoriteState {
  favorites: Topic[];
  toggleFavorite: (topic: Topic) => void;
  loadFavorites: () => void;
}

export const useFavoriteStore = create<FavoriteState>((set) => ({
  favorites: [],
  loadFavorites: () => {
    const stored = localStorage.getItem("favoriteTopics");
    if (stored) {
      set({ favorites: JSON.parse(stored) });
    }
  },
  toggleFavorite: (topic) =>
    set((state) => {
      const isFavorite = state.favorites.some((f) => f.id === topic.id);
      const newFavorites = isFavorite
        ? state.favorites.filter((f) => f.id !== topic.id)
        : [...state.favorites, topic];

      localStorage.setItem("favoriteTopics", JSON.stringify(newFavorites));
      return { favorites: newFavorites };
    }),
}));
