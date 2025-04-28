import { match, P } from "ts-pattern";
import { TopicCard } from "./TopicCard";
import { TopicContentProps } from "../../../types/topic";
import { useFavorite } from "../../../hooks/useFavorite";

export const TopicContent = ({
  settings,
  isGptLoading,
  isGptError,
  gptTopic,
  randomTopic,
  isFilterComplete,
  filter,
}: TopicContentProps) => {
  // Generate GPT topic if available
  const gptGeneratedTopic =
    gptTopic && isFilterComplete
      ? {
          id: `gpt-${filter.relationship}-${filter.mood}-${
            filter.situation
          }-${gptTopic.split(".")[0].slice(0, 20).replace(/\s+/g, "-")}`,
          title: "GPT 생성 주제",
          description: gptTopic,
          content: gptTopic,
          relationship: filter.relationship!,
          mood: filter.mood!,
          situation: filter.situation!,
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
        }
      : null;

  // Use the appropriate topic for the favorite hook
  const currentTopic = settings.gptMode ? gptGeneratedTopic : randomTopic;
  const { handleFavorite, isFavorite } = useFavorite(currentTopic);

  return match({
    settings,
    isGptLoading,
    isGptError,
    gptTopic,
    randomTopic,
    isFilterComplete,
  })
    .with({ settings: { gptMode: true }, isGptLoading: true }, () => (
      <TopicCard
        topic={null}
        isLoading
        onFavorite={handleFavorite}
        isFavorite={false}
      />
    ))
    .with({ settings: { gptMode: true }, isGptError: true }, () => (
      <TopicCard
        topic={null}
        isError
        onFavorite={handleFavorite}
        isFavorite={false}
      />
    ))
    .with(
      {
        settings: { gptMode: true },
        gptTopic: P.not(P.nullish),
        isFilterComplete: true,
      },
      () => {
        if (!gptGeneratedTopic) return null;
        return (
          <TopicCard
            topic={gptGeneratedTopic}
            onFavorite={handleFavorite}
            isFavorite={isFavorite(gptGeneratedTopic.id)}
          />
        );
      }
    )
    .with({ settings: { gptMode: true } }, () => (
      <TopicCard
        topic={null}
        isPrompt
        isFilterComplete={isFilterComplete}
        onFavorite={handleFavorite}
        isFavorite={false}
      />
    ))
    .with({ randomTopic: P.not(P.nullish) }, ({ randomTopic }) => (
      <TopicCard
        topic={randomTopic}
        onFavorite={handleFavorite}
        isFavorite={isFavorite(randomTopic.id)}
      />
    ))
    .with({ randomTopic: P.nullish }, () => (
      <TopicCard
        topic={null}
        isPrompt
        isFilterComplete={isFilterComplete}
        onFavorite={handleFavorite}
        isFavorite={false}
      />
    ))
    .otherwise(() => (
      <TopicCard topic={null} onFavorite={handleFavorite} isFavorite={false} />
    ));
};
