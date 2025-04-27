// src/components/TopicCard.tsx
import { ShareIcon } from "@heroicons/react/24/outline";
import { TopicCardProps, Topic } from "../../../types/topic";
import { useFavoriteTopics } from "../../../hooks/useTopics";
import { match } from "ts-pattern";
import { TopicActions } from "./TopicActions";

export const TopicCard = ({
  topic,
  isLoading = false,
  isError = false,
  isPrompt = false,
  isFilterComplete = false,
}: TopicCardProps) => {
  const {
    favorites,
    addToFavorites,
    removeFromFavorites,
    isAdding,
    isRemoving,
  } = useFavoriteTopics();

  const isFavorite = favorites.some((f) => f.id === topic?.id);

  const handleFavoriteClick = () => {
    if (topic) {
      if (isFavorite) {
        removeFromFavorites(topic.id);
      } else {
        addToFavorites(topic);
      }
    }
  };

  const handleShareClick = () => {
    if (topic && navigator.share) {
      navigator.share({
        title: "Hanasi Topic",
        text: topic.content,
      });
    }
  };

  return match({ topic, isLoading, isError, isPrompt })
    .with({ isLoading: true }, () => (
      <div className="h-48 rounded-xl bg-white/50 backdrop-blur-sm p-6 shadow-lg transition-all hover:shadow-xl hover:scale-[1.02]">
        <div className="flex flex-wrap gap-2 mb-4">
          <span className="px-3 py-1 text-sm rounded-full bg-soft-rose text-romantic-text animate-pulse">
            로딩 중...
          </span>
          <span className="px-3 py-1 text-sm rounded-full bg-soft-lavender text-romantic-text animate-pulse">
            로딩 중...
          </span>
          <span className="px-3 py-1 text-sm rounded-full bg-soft-peach text-romantic-text animate-pulse">
            로딩 중...
          </span>
        </div>
        <p className="line-clamp-2 text-romantic-text animate-pulse">
          주제를 생성하는 중입니다...
        </p>
      </div>
    ))
    .with({ isError: true }, () => (
      <div className="h-48 p-6 shadow-lg rounded-xl bg-white/50 backdrop-blur-sm">
        <p className="text-center text-red-500">
          주제 생성 중 오류가 발생했습니다.
        </p>
      </div>
    ))
    .with({ isPrompt: true }, () => (
      <div className="h-48 p-6 shadow-lg rounded-xl bg-white/50 backdrop-blur-sm">
        <p className="text-center text-romantic-text">
          {!isFilterComplete
            ? "모든 조건을 선택해주세요."
            : "생성 버튼을 눌러주세요."}
        </p>
      </div>
    ))
    .with({ topic: null }, () => (
      <div className="h-48 p-6 shadow-lg rounded-xl bg-white/50 backdrop-blur-sm">
        <p className="text-center text-romantic-text">
          선택한 조건에 맞는 주제가 없습니다.
        </p>
      </div>
    ))
    .otherwise(({ topic }) => {
      const nonNullTopic = topic as Topic;
      return (
        <div className="h-48 rounded-xl bg-white/50 backdrop-blur-sm p-6 shadow-lg transition-all hover:shadow-xl hover:scale-[1.02]">
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="px-3 py-1 text-sm rounded-full bg-soft-rose text-romantic-text">
              {nonNullTopic.relationship}
            </span>
            <span className="px-3 py-1 text-sm rounded-full bg-soft-lavender text-romantic-text">
              {nonNullTopic.mood}
            </span>
            <span className="px-3 py-1 text-sm rounded-full bg-soft-peach text-romantic-text">
              {nonNullTopic.situation}
            </span>
          </div>
          <p className="line-clamp-2 text-romantic-text">
            {nonNullTopic.content}
          </p>

          <div className="flex items-center justify-between mt-4">
            <TopicActions
              topic={nonNullTopic}
              isFavorite={isFavorite}
              isAdding={isAdding}
              isRemoving={isRemoving}
              onFavoriteToggle={handleFavoriteClick}
            />

            <button
              onClick={handleShareClick}
              className="p-2 transition-colors rounded-full hover:bg-soft-pink"
            >
              <ShareIcon className="w-6 h-6 text-romantic-subtitle" />
            </button>
          </div>
        </div>
      );
    });
};
