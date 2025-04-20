import { useTopicStore } from "../store/useTopicStore";
import { TopicCard } from "../components/TopicCard";

export const Favorites = () => {
  const { favorites } = useTopicStore();

  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold text-gray-900">즐겨찾기</h1>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {favorites.map((topic) => (
          <TopicCard key={topic.id} topic={topic} />
        ))}
      </div>

      {favorites.length === 0 && (
        <div className="rounded-lg bg-white p-8 text-center shadow">
          <p className="text-gray-500">아직 저장된 주제가 없습니다.</p>
        </div>
      )}
    </div>
  );
};
