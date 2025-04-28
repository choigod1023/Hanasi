import { Topic } from "./topic";

export interface HistoryState {
  historyTopics: Topic[];
  addToHistory: (topic: Topic) => void;
  clearHistory: () => void;
}
