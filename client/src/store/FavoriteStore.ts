import { create } from "zustand";
import { FavoriteState } from "../types/favorite";

export const favoriteStore = create<FavoriteState>((set) => ({
  favorites: JSON.parse(localStorage.getItem("favorites") || "[]"),
  addFavorite: (topic) => {
    set((state) => {
      const newFavorites = [...state.favorites, topic];
      localStorage.setItem("favorites", JSON.stringify(newFavorites));
      return { favorites: newFavorites };
    });
  },
  removeFavorite: (topicId) => {
    set((state) => {
      const newFavorites = state.favorites.filter((f) => f.id !== topicId);
      localStorage.setItem("favorites", JSON.stringify(newFavorites));
      return { favorites: newFavorites };
    });
  },
}));
