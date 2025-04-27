import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { presetTopics } from "../data/topics";
import { generateGptTopic as generateGptTopicApi } from "../api/topicApi";
import { Topic, TopicFilter } from "../types/topic";
import { useFavoriteStore } from "../store/useFavoriteStore";

// 토픽 필터링 로직
const filterTopics = (topics: Topic[], filter: TopicFilter) => {
  return topics.filter((t) => {
    const matchRelationship =
      !filter.relationship || t.relationship === filter.relationship;
    const matchMood = !filter.mood || t.mood === filter.mood;
    const matchSituation =
      !filter.situation || t.situation === filter.situation;

    return matchRelationship && matchMood && matchSituation;
  });
};

// 랜덤 토픽 선택
export const useRandomTopic = (filter: TopicFilter, enabled: boolean) => {
  return useQuery({
    queryKey: ["randomTopic", filter],
    queryFn: async () => {
      const filteredTopics = filterTopics(presetTopics, filter);
      if (filteredTopics.length === 0) return null;
      const randomIndex = Math.floor(Math.random() * filteredTopics.length);
      return filteredTopics[randomIndex];
    },
    enabled,
  });
};

// GPT 토픽 생성
export const useGptTopic = (filter: TopicFilter) => {
  return useQuery({
    queryKey: ["gptTopic", filter],
    queryFn: async () => {
      return generateGptTopicApi(filter);
    },
    enabled: false,
  });
};

// 필터링된 토픽 목록
export const useFilteredTopics = (filter: TopicFilter) => {
  return useQuery({
    queryKey: ["filteredTopics", filter],
    queryFn: () => filterTopics(presetTopics, filter),
  });
};

export const useFavoriteTopics = () => {
  const queryClient = useQueryClient();
  const { favorites, toggleFavorite } = useFavoriteStore();

  const addToFavorites = useMutation({
    mutationFn: async (topic: Topic) => {
      toggleFavorite(topic);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["favorites"] });
    },
  });

  const removeFromFavorites = useMutation({
    mutationFn: async (topicId: string) => {
      toggleFavorite({ id: topicId } as Topic);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["favorites"] });
    },
  });

  return {
    favorites,
    addToFavorites: addToFavorites.mutate,
    removeFromFavorites: removeFromFavorites.mutate,
    isAdding: addToFavorites.isPending,
    isRemoving: removeFromFavorites.isPending,
  };
};

// 히스토리 토픽 관리
export const useHistoryTopics = () => {
  return useQuery({
    queryKey: ["historyTopics"],
    queryFn: () => {
      const history = localStorage.getItem("historyTopics");
      return history ? JSON.parse(history) : [];
    },
  });
};
