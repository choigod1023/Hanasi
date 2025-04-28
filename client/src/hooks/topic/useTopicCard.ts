import { Topic } from "../../types/topic";
import { useFavoriteTopics } from "../useTopics";
import {
  handleFavoriteClick as handleFavoriteClickUtil,
  handleShareClick as handleShareClickUtil,
} from "../../utils/topicActions";

export const useTopicCard = (topic: Topic | null) => {
  const {
    favorites,
    addToFavorites,
    removeFromFavorites,
    isAdding,
    isRemoving,
  } = useFavoriteTopics();

  const isFavorite = topic
    ? favorites.some((f: Topic) => f.id === topic.id)
    : false;

  const handleFavoriteClick = () =>
    handleFavoriteClickUtil(
      topic,
      isFavorite,
      addToFavorites,
      removeFromFavorites
    );

  const handleShareClick = () => handleShareClickUtil(topic);

  return {
    isFavorite,
    isAdding,
    isRemoving,
    handleFavoriteClick,
    handleShareClick,
  };
};
