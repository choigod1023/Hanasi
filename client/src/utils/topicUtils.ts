import { Topic, TopicFilter } from "../types/topic";

export const filterTopics = (topics: Topic[], filter: TopicFilter) => {
  return topics.filter((t) => {
    const matchRelationship =
      !filter.relationship || t.relationship === filter.relationship;
    const matchMood = !filter.mood || t.mood === filter.mood;
    const matchSituation =
      !filter.situation || t.situation === filter.situation;
    return matchRelationship && matchMood && matchSituation;
  });
};

export const getRandomTopic = (
  topics: Topic[],
  filter?: TopicFilter
): Topic | null => {
  if (!topics.length) return null;

  // 필터 조건에 맞는 토픽들만 필터링
  const filteredTopics = topics.filter((topic) => {
    if (!filter) return true;

    const matchesRelationship =
      !filter.relationship || topic.relationship === filter.relationship;
    const matchesMood = !filter.mood || topic.mood === filter.mood;
    const matchesSituation =
      !filter.situation || topic.situation === filter.situation;

    return matchesRelationship && matchesMood && matchesSituation;
  });

  if (!filteredTopics.length) return null;

  const randomIndex = Math.floor(Math.random() * filteredTopics.length);
  return filteredTopics[randomIndex];
};
