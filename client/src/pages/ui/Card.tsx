import {
  HeartIcon,
  ShareIcon,
  DocumentDuplicateIcon,
} from "@heroicons/react/24/outline";
import { HeartIcon as HeartSolidIcon } from "@heroicons/react/24/solid";
import { CardProps } from "../../types/ui";
import clsx from "clsx";
import { match } from "ts-pattern";
import { copyText } from "../../utils/clipboard";

export const Card = ({
  children,
  className,
  onFavorite,
  onShare,
  isFavorite,
  hover,
  topic,
}: CardProps) => {
  const handleCopy = () => {
    if (topic?.content) {
      copyText(topic.content, "주제가 클립보드에 복사되었습니다!");
    }
  };

  return (
    <div
      className={clsx(
        "h-48 rounded-xl bg-white/50 backdrop-blur-sm p-6 shadow-lg",
        hover && "transition-all hover:shadow-xl hover:scale-[1.02]",
        className
      )}
    >
      {topic && (
        <div className="flex flex-wrap gap-2 mb-4">
          <span className="px-3 py-1 text-sm rounded-full bg-soft-rose text-romantic-text">
            {topic.relationship}
          </span>
          <span className="px-3 py-1 text-sm rounded-full bg-soft-lavender text-romantic-text">
            {topic.mood}
          </span>
          <span className="px-3 py-1 text-sm rounded-full bg-soft-peach text-romantic-text">
            {topic.situation}
          </span>
        </div>
      )}
      {children}
      <div className="flex items-center justify-between mt-4">
        {topic && (
          <div className="flex space-x-2 text-sm text-romantic-subtitle">
            <span>{topic.relationship}</span>
            <span>•</span>
            <span>{topic.mood}</span>
            <span>•</span>
            <span>{topic.situation}</span>
          </div>
        )}
        <div className="flex space-x-2">
          {onFavorite && (
            <button
              onClick={onFavorite}
              className="p-2 transition-colors rounded-full hover:bg-soft-pink"
            >
              {match(isFavorite)
                .with(true, () => (
                  <HeartSolidIcon className="w-6 h-6 text-romantic-text" />
                ))
                .otherwise(() => (
                  <HeartIcon className="w-6 h-6 text-romantic-subtitle" />
                ))}
            </button>
          )}
          {onShare && (
            <button
              onClick={onShare}
              className="p-2 transition-colors rounded-full hover:bg-soft-pink"
            >
              <ShareIcon className="w-6 h-6 text-romantic-subtitle" />
            </button>
          )}
          {topic && (
            <button
              onClick={handleCopy}
              className="p-2 transition-colors rounded-full hover:bg-soft-pink"
            >
              <DocumentDuplicateIcon className="w-6 h-6 text-romantic-subtitle" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
