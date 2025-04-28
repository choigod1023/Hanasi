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

export const getRandomTopic = (topics: Topic[]) => {
  if (topics.length === 0) return null;
  const randomIndex = Math.floor(Math.random() * topics.length);
  return topics[randomIndex];
};
