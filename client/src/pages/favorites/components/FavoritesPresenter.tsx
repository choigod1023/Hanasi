import { Topic } from "../../../types/topic";
import { FavoritesList } from "./FavoritesList";

interface FavoritesPresenterProps {
  favorites?: Topic[];
  onFavorite: (id: string) => void;
  isAdding?: boolean;
  isRemoving?: boolean;
}

export const FavoritesPresenter = ({
  favorites = [],
  onFavorite,
  isAdding = false,
  isRemoving = false,
}: FavoritesPresenterProps) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pastel-pink via-pastel-lavender to-pastel-sky">
      <div className="container px-4 py-8 mx-auto">
        <div className="mb-8">
          <h1 className="mb-4 text-3xl font-bold text-center text-romantic-title">
            즐겨찾기
          </h1>
        </div>
        <FavoritesList
          favorites={favorites}
          onFavorite={onFavorite}
          isAdding={isAdding}
          isRemoving={isRemoving}
        />
      </div>
    </div>
  );
};
