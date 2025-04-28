// src/pages/Home.tsx
import { TopicFilter } from "./topic/components/TopicFilter";
import { topicStore } from "../store/TopicStore";
import { useRandomTopic, useGptTopic } from "../hooks/useTopics";
import { Button } from "./ui/Button";
import { TopicContent } from "./topic/components/TopicContent";
import { useFavorite } from "../hooks/useFavorite";

export const Home = () => {
  const { filter, settings } = topicStore();

  // 랜덤 토픽 선택 쿼리
  const { data: randomTopic } = useRandomTopic(filter);

  // GPT 토픽 생성 쿼리
  const {
    data: gptTopic,
    isLoading: isGptLoading,
    refetch: generateGptTopic,
    isError: isGptError,
  } = useGptTopic(filter);

  const { handleFavorite, isFavorite } = useFavorite(randomTopic ?? null);

  const isFilterComplete = Boolean(
    filter.relationship && filter.mood && filter.situation
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-pastel-pink via-pastel-lavender to-pastel-sky">
      <div className="container px-4 py-8 mx-auto">
        <div className="mb-8">
          <h1 className="mb-4 text-3xl font-bold text-center text-romantic-title">
            대화 주제
          </h1>
          <div className="max-w-2xl p-6 mx-auto shadow-lg bg-white/50 backdrop-blur-sm rounded-xl">
            <TopicFilter />
          </div>
        </div>

        <div className="max-w-2xl mx-auto">
          {settings.gptMode && (
            <div className="flex justify-center mb-4">
              <Button
                onClick={() => generateGptTopic()}
                disabled={!isFilterComplete || isGptLoading}
                variant={
                  !isFilterComplete || isGptLoading ? "secondary" : "primary"
                }
                isLoading={isGptLoading}
              >
                {isGptLoading ? "생성 중..." : "주제 생성하기"}
              </Button>
            </div>
          )}
          <TopicContent
            settings={settings}
            isGptLoading={isGptLoading}
            isGptError={isGptError}
            gptTopic={gptTopic ?? null}
            randomTopic={randomTopic ?? null}
            isFilterComplete={isFilterComplete}
            filter={filter}
            onFavorite={handleFavorite}
            isFavorite={isFavorite}
          />
        </div>
      </div>
    </div>
  );
};
