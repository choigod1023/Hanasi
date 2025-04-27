import { HeartIcon, ShareIcon } from "@heroicons/react/24/outline";
import { HeartIcon as HeartIconSolid } from "@heroicons/react/24/solid";
import { TopicActionsProps } from "../../../types/topic";
import { match } from "ts-pattern";

export const TopicActions = ({
  topic,
  isFavorite,
  isAdding = false,
  isRemoving = false,
  onFavoriteToggle,
}: TopicActionsProps) => {
  const handleShare = async () => {
    try {
      await navigator.clipboard.writeText(topic.content);
      alert("주제가 클립보드에 복사되었습니다!");
    } catch (err) {
      console.error("복사 실패:", err);
    }
  };

  return (
    <div className="flex space-x-2">
      <button
        onClick={onFavoriteToggle}
        disabled={isAdding || isRemoving}
        className="p-2 transition-colors rounded-full hover:bg-soft-pink disabled:opacity-50"
      >
        {match({ isFavorite })
          .with({ isFavorite: true }, () => (
            <HeartIconSolid className="w-6 h-6 text-romantic-text" />
          ))
          .otherwise(() => (
            <HeartIcon className="w-6 h-6 text-romantic-subtitle" />
          ))}
      </button>

      <button
        onClick={handleShare}
        className="p-2 transition-colors rounded-full hover:bg-soft-pink"
      >
        <ShareIcon className="w-6 h-6 text-romantic-subtitle" />
      </button>
    </div>
  );
};
