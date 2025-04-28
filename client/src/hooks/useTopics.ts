import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { presetTopics } from "../data/topics";
import { generateGptTopic as generateGptTopicApi } from "../api/topicApi";
import { Topic, TopicFilter } from "../types/topic";
import { favoriteStore } from "../store/FavoriteStore";
import { historyStore } from "../store/HistoryStore";
import { filterTopics, getRandomTopic } from "../utils/topicUtils";

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

// 랜덤 토픽 선택
export const useRandomTopic = (filter: TopicFilter) => {
  return useQuery({
    queryKey: ["randomTopic", filter],
    queryFn: () => filterTopics(presetTopics, filter),
    select: (filteredTopics) => getRandomTopic(filteredTopics),
  });
};

// 필터링된 토픽 목록
export const useFilteredTopics = (filter: TopicFilter) => {
  return useQuery({
    queryKey: ["filteredTopics", filter],
    queryFn: () => filterTopics(presetTopics, filter),
  });
};

// 즐겨찾기 관리
export const useFavoriteTopics = () => {
  const queryClient = useQueryClient();
  const { favorites, addFavorite, removeFavorite } = favoriteStore();

  const addToFavorites = useMutation({
    mutationFn: async (topic: Topic) => {
      addFavorite(topic);
    },
    onMutate: async (newTopic) => {
      // 현재 쿼리를 취소
      await queryClient.cancelQueries({ queryKey: ["favorites"] });

      // 이전 상태 저장
      const previousFavorites = queryClient.getQueryData(["favorites"]);

      // 새로운 상태로 업데이트
      queryClient.setQueryData(["favorites"], (old: Topic[] = []) => [
        ...old,
        newTopic,
      ]);

      return { previousFavorites };
    },
    onError: (err, newTopic, context) => {
      // 에러 발생 시 이전 상태로 롤백
      queryClient.setQueryData(["favorites"], context?.previousFavorites);
    },
  });

  const removeFromFavorites = useMutation({
    mutationFn: async (topicId: string) => {
      removeFavorite(topicId);
    },
    onMutate: async (topicId) => {
      // 현재 쿼리를 취소
      await queryClient.cancelQueries({ queryKey: ["favorites"] });

      // 이전 상태 저장
      const previousFavorites = queryClient.getQueryData(["favorites"]);

      // 새로운 상태로 업데이트
      queryClient.setQueryData(["favorites"], (old: Topic[] = []) =>
        old.filter((t) => t.id !== topicId)
      );

      return { previousFavorites };
    },
    onError: (err, topicId, context) => {
      // 에러 발생 시 이전 상태로 롤백
      queryClient.setQueryData(["favorites"], context?.previousFavorites);
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
  const { historyTopics, addToHistory, clearHistory } = historyStore();

  return {
    historyTopics,
    addToHistory,
    clearHistory,
  };
};
