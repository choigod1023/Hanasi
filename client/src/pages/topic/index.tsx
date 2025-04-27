import { TopicFilter } from "./components/TopicFilter";
import { useTopicStore } from "../../store/useTopicStore";
import { useRandomTopic, useGptTopic } from "../../hooks/useTopics";
import { match, P } from "ts-pattern";
import { TopicCard } from "./components/TopicCard";
import { Button } from "../ui/Button";
import { Topic } from "../../types/topic";

export const Home = () => {
  const { filter, settings } = useTopicStore();

  // 랜덤 토픽 선택 쿼리
  const { data: randomTopic } = useRandomTopic(filter, !settings.gptMode);

  // GPT 토픽 생성 쿼리
  const {
    data: gptTopic,
    isLoading: isGptLoading,
    refetch: generateGptTopic,
    isError: isGptError,
  } = useGptTopic(filter);

  const isFilterComplete = Boolean(
    filter.relationship && filter.mood && filter.situation
  );

  const renderContent = () =>
    match({
      settings,
      isGptLoading,
      isGptError,
      gptTopic,
      randomTopic,
      isFilterComplete,
    })
      .with({ settings: { gptMode: true }, isGptLoading: true }, () => (
        <TopicCard topic={null} isLoading />
      ))
      .with({ settings: { gptMode: true }, isGptError: true }, () => (
        <TopicCard topic={null} isError />
      ))
      .with(
        {
          settings: { gptMode: true },
          gptTopic: P.not(P.nullish),
          isFilterComplete: true,
        },
        ({ gptTopic }) => (
          <TopicCard
            topic={{
              id: `gpt-topic-${Date.now()}`,
              content: gptTopic,
              relationship: filter.relationship!,
              mood: filter.mood!,
              situation: filter.situation!,
            }}
          />
        )
      )
      .with({ settings: { gptMode: true } }, () => (
        <TopicCard topic={null} isPrompt isFilterComplete={isFilterComplete} />
      ))
      .with({ randomTopic: P.not(P.nullish) }, ({ randomTopic }) => (
        <TopicCard topic={randomTopic as unknown as Topic} />
      ))
      .with({ randomTopic: P.nullish }, () => (
        <TopicCard topic={null} isPrompt isFilterComplete={isFilterComplete} />
      ))
      .otherwise(() => <TopicCard topic={null} />);

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
              >
                {isGptLoading ? "생성 중..." : "주제 생성하기"}
              </Button>
            </div>
          )}
          {renderContent()}
        </div>
      </div>
    </div>
  );
};
