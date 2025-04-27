import { TopicCard } from "../topic/components/TopicCard";
import { useFavoriteTopics } from "../../hooks/useTopics";
import { match } from "ts-pattern";

export const Favorites = () => {
  const { favorites } = useFavoriteTopics();

  const renderContent = () =>
    match(favorites)
      .with([], () => (
        <div className="max-w-2xl p-6 mx-auto mt-8 text-center shadow-lg rounded-xl bg-white/50 backdrop-blur-sm">
          <p className="text-romantic-text">아직 저장된 주제가 없습니다.</p>
        </div>
      ))
      .otherwise((favorites) => (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {favorites.map((topic) => (
            <TopicCard key={topic.id} topic={topic} />
          ))}
        </div>
      ));

  return (
    <div className="min-h-screen bg-gradient-to-br from-pastel-pink via-pastel-lavender to-pastel-sky">
      <div className="container px-4 py-8 mx-auto">
        <div className="mb-8">
          <h1 className="mb-4 text-3xl font-bold text-center text-romantic-title">
            즐겨찾기
          </h1>
        </div>
        {renderContent()}
      </div>
    </div>
  );
};
