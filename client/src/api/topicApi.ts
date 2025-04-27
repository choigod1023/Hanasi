import { TopicFilter } from "../types/topic";
import ky from "ky";
import { API_BASE_URL } from "../config";
const api = ky.create({
  prefixUrl: API_BASE_URL,
  timeout: 10000,
  retry: 2,
});

export const generateGptTopic = async (filter: TopicFilter) => {
  try {
    const data = await api
      .post("topics/generate", {
        json: {
          relationship: filter.relationship,
          mood: filter.mood,
          situation: filter.situation,
        },
      })
      .json<{ topic: string }>();

    return data.topic;
  } catch (error) {
    console.error("GPT 토픽 생성 실패:", error);
    throw error;
  }
};
