import { HeartIcon } from "@heroicons/react/24/outline";
import { HeartIcon as HeartIconSolid } from "@heroicons/react/24/solid";
import { ClipboardDocumentIcon } from "@heroicons/react/24/outline";
import { TopicActionsProps } from "../../../types/topic";
import { copyText } from "../../../utils/clipboard";

export const TopicActions = ({
  topic,
  isFavorite,
  onFavoriteToggle,
}: TopicActionsProps) => {
  const handleShare = () => {
    copyText(topic.content, "주제가 클립보드에 복사되었습니다.");
  };

  const favoriteButtonClass =
    "p-2 transition-colors rounded-full hover:bg-soft-pink";
  const favoriteIconClass = isFavorite
    ? "text-red-500"
    : "text-romantic-subtitle";
  const shareButtonClass =
    "p-2 transition-colors rounded-full hover:bg-soft-pink text-romantic-subtitle";

  return (
    <div className="flex items-center gap-2">
      <button
        onClick={onFavoriteToggle}
        className={`${favoriteButtonClass} ${favoriteIconClass}`}
        aria-label={isFavorite ? "좋아요 취소" : "좋아요"}
      >
        {isFavorite ? (
          <HeartIconSolid className="w-6 h-6 transition-transform hover:scale-110" />
        ) : (
          <HeartIcon className="w-6 h-6 transition-transform hover:scale-110" />
        )}
      </button>
      <button
        onClick={handleShare}
        className={shareButtonClass}
        aria-label="복사"
      >
        <ClipboardDocumentIcon className="w-6 h-6 transition-transform hover:scale-110" />
      </button>
    </div>
  );
};
