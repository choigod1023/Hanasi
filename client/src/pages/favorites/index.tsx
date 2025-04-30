import { FavoritesFallback } from "./components/FavoritesFallback";
import { AsyncFavorites } from "./components/AsyncFavorites";
import { FavoritesPresenter } from "./components/FavoritesPresenter";

export const Favorites = () => {
  return (
    <AsyncFavorites
      pendingFallback={<FavoritesFallback />}
      rejectedFallback={<FavoritesFallback />}
    >
      {({ favorites, isAdding, isRemoving, onFavorite }) => (
        <FavoritesPresenter
          favorites={favorites}
          isAdding={isAdding}
          isRemoving={isRemoving}
          onFavorite={onFavorite}
        />
      )}
    </AsyncFavorites>
  );
};
