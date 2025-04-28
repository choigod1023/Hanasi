import { Topic } from "../types/topic";

export const handleFavoriteClick = (
  topic: Topic | null,
  isFavorite: boolean,
  addToFavorites: (topic: Topic) => void,
  removeFromFavorites: (id: string) => void
) => {
  if (topic) {
    if (isFavorite) {
      removeFromFavorites(topic.id);
    } else {
      addToFavorites(topic);
    }
  }
};

export const handleShareClick = async (topic: Topic | null) => {
  if (topic && navigator.share) {
    try {
      await navigator.share({
        title: "Hanasi Topic",
        text: topic.content,
      });
    } catch (err) {
      console.error("공유 실패:", err);
    }
  }
};
