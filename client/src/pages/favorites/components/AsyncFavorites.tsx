import React, { ReactNode } from "react";
import { Topic } from "../../../types/topic";
import { useFavorites } from "../../../hooks/useFavorite";

interface AsyncFavoritesProps {
  children: (props: {
    favorites: Topic[];
    isAdding: boolean;
    isRemoving: boolean;
    onFavorite: (id: string) => void;
  }) => ReactNode;
  pendingFallback: ReactNode;
  rejectedFallback: ReactNode;
}

export const AsyncFavorites = ({
  children,
  pendingFallback,
  rejectedFallback,
}: AsyncFavoritesProps) => {
  const { favorites, isAdding, isRemoving, removeFromFavorites } =
    useFavorites();

  if (isAdding || isRemoving) {
    return <>{pendingFallback}</>;
  }

  if (!favorites) {
    return <>{rejectedFallback}</>;
  }

  return (
    <>
      {children({
        favorites,
        isAdding,
        isRemoving,
        onFavorite: removeFromFavorites,
      })}
    </>
  );
};
