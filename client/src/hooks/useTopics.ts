import { useQuery } from "@tanstack/react-query";
import { generateGptTopic as generateGptTopicApi } from "../api/topicApi";
import { TopicFilter } from "../types/topic";
import { historyStore } from "../store/HistoryStore";

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

// 히스토리 토픽 관리
export const useHistoryTopics = () => {
  const { historyTopics, addToHistory, clearHistory } = historyStore();

  return {
    historyTopics,
    addToHistory,
    clearHistory,
  };
};
