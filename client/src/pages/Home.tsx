// src/pages/Home.tsx
import { useEffect, useState } from "react";
import { TopicCard } from "../components/TopicCard";
import { TopicFilter } from "../components/TopicFilter";
import { useTopicStore } from "../store/useTopicStore";
import { Topic } from "../types/topic";

export const Home = () => {
  const { topics, filter, settings } = useTopicStore();
  const [randomTopic, setRandomTopic] = useState<Topic | null>(null);
  const [gptTopic, setGptTopic] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const generateGptTopic = async () => {
    if (!filter.relationship || !filter.mood || !filter.situation) {
      return;
    }

    try {
      setIsLoading(true);
      setGptTopic(null); // 이전 결과 초기화

      const response = await fetch("http://localhost:3001/api/generate-topic", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          relationship: filter.relationship,
          mood: filter.mood,
          situation: filter.situation,
        }),
      });
      console.log({
        relationship: filter.relationship,
        mood: filter.mood,
        situation: filter.situation,
      });
      if (!response.ok) {
        throw new Error("API 요청 실패");
      }

      const data = await response.json();
      setGptTopic(data.topic);
    } catch (error) {
      console.error("GPT 토픽 생성 실패:", error);
      setGptTopic(null);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (!settings.gptMode) {
      // 일반 모드일 때
      const filteredTopics = topics.filter((t) => {
        const matchRelationship =
          !filter.relationship || t.relationship === filter.relationship;
        const matchMood = !filter.mood || t.mood === filter.mood;
        const matchSituation =
          !filter.situation || t.situation === filter.situation;

        return matchRelationship && matchMood && matchSituation;
      });

      if (filteredTopics.length > 0) {
        const randomIndex = Math.floor(Math.random() * filteredTopics.length);
        setRandomTopic(filteredTopics[randomIndex]);
      } else {
        setRandomTopic(null);
      }
    }
  }, [topics, filter, settings.gptMode]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-pastel-pink via-pastel-lavender to-pastel-sky">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="mb-4 text-3xl font-bold text-romantic-title text-center">
            대화 주제
          </h1>
          <div className="max-w-2xl mx-auto bg-white/50 backdrop-blur-sm rounded-xl p-6 shadow-lg">
            <TopicFilter />
          </div>
        </div>

        <div className="max-w-2xl mx-auto">
          {settings.gptMode ? (
            <>
              <div className="mb-4 flex justify-center">
                <button
                  onClick={generateGptTopic}
                  disabled={
                    !filter.relationship ||
                    !filter.mood ||
                    !filter.situation ||
                    isLoading
                  }
                  className={`px-6 py-2 rounded-full text-white font-medium transition-all
                    ${
                      !filter.relationship ||
                      !filter.mood ||
                      !filter.situation ||
                      isLoading
                        ? "bg-soft-pink/50 cursor-not-allowed"
                        : "bg-romantic-text hover:bg-romantic-title"
                    }`}
                >
                  {isLoading ? "생성 중..." : "주제 생성하기"}
                </button>
              </div>
              {isLoading ? (
                <div className="h-48 rounded-xl bg-white/50 backdrop-blur-sm p-6 shadow-lg">
                  <p className="text-romantic-text text-center">
                    주제를 생성하는 중입니다...
                  </p>
                </div>
              ) : gptTopic ? (
                <div className="h-48 rounded-xl bg-white/50 backdrop-blur-sm p-6 shadow-lg">
                  <p className="text-romantic-text">{gptTopic}</p>
                </div>
              ) : (
                <div className="h-48 rounded-xl bg-white/50 backdrop-blur-sm p-6 shadow-lg">
                  <p className="text-romantic-text text-center">
                    {!filter.relationship || !filter.mood || !filter.situation
                      ? "모든 조건을 선택해주세요."
                      : "생성 버튼을 눌러주세요."}
                  </p>
                </div>
              )}
            </>
          ) : randomTopic ? (
            <TopicCard topic={randomTopic} />
          ) : (
            <div className="h-48 rounded-xl bg-white/50 backdrop-blur-sm p-6 shadow-lg">
              <p className="text-romantic-text text-center">
                선택한 조건에 맞는 주제가 없습니다.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
