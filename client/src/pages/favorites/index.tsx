import { useFavoriteTopics } from "../../hooks/useTopics";
import { FavoritesList } from "./components/FavoritesList";

export const Favorites = () => {
  const { favorites, removeFromFavorites } = useFavoriteTopics();

  return (
    <div className="min-h-screen bg-gradient-to-br from-pastel-pink via-pastel-lavender to-pastel-sky">
      <div className="container px-4 py-8 mx-auto">
        <div className="mb-8">
          <h1 className="mb-4 text-3xl font-bold text-center text-romantic-title">
            즐겨찾기
          </h1>
        </div>
        <FavoritesList favorites={favorites} onFavorite={removeFromFavorites} />
      </div>
    </div>
  );
};
