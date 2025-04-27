import { create } from "zustand";
import { Topic, TopicFilter } from "../types/topic";
import { presetTopics } from "../data/topics";

interface TopicStore {
  topics: Topic[];
  favorites: Topic[];
  filter: TopicFilter;
  history: Topic[];
  settings: {
    gptMode: boolean;
  };
  setFilter: (filter: Partial<TopicFilter>) => void;
  setTopics: (topics: Topic[]) => void;
  addToFavorites: (topic: Topic) => void;
  removeFromFavorites: (topicId: string) => void;
  addToHistory: (topic: Topic) => void;
  toggleGptMode: () => void;
  generateGptTopics: () => Promise<void>;
  setSettings: (settings: Partial<TopicStore["settings"]>) => void;
}

export const useTopicStore = create<TopicStore>((set, get) => ({
  topics: [],
  favorites: [],
  history: [],
  filter: {
    relationship: null,
    mood: null,
    situation: null,
  },
  settings: {
    gptMode: false,
  },
  setFilter: (newFilter) =>
    set((state) => ({
      filter: { ...state.filter, ...newFilter },
    })),
  setTopics: (topics) => set({ topics }),
  addToFavorites: (topic) =>
    set((state) => ({
      favorites: [...state.favorites, topic],
    })),
  removeFromFavorites: (topicId) =>
    set((state) => ({
      favorites: state.favorites.filter((t) => t.id !== topicId),
    })),
  addToHistory: (topic) =>
    set((state) => ({
      history: [topic, ...state.history].slice(0, 50), // 최근 50개만 유지
    })),
  toggleGptMode: () =>
    set((state) => ({
      settings: { ...state.settings, gptMode: !state.settings.gptMode },
    })),
  generateGptTopics: async () => {
    const { filter, settings } = get();

    if (!settings.gptMode) {
      // 프리셋 주제에서 필터링
      const filteredTopics = presetTopics.filter((topic) => {
        if (filter.relationship && topic.relationship !== filter.relationship)
          return false;
        if (filter.mood && topic.mood !== filter.mood) return false;
        if (filter.situation && topic.situation !== filter.situation)
          return false;
        return true;
      });
      set({ topics: filteredTopics });
    } else {
      // TODO: GPT API 호출 구현
      // 임시로 프리셋 주제를 사용
      const filteredTopics = presetTopics.filter((topic) => {
        if (filter.relationship && topic.relationship !== filter.relationship)
          return false;
        if (filter.mood && topic.mood !== filter.mood) return false;
        if (filter.situation && topic.situation !== filter.situation)
          return false;
        return true;
      });
      set({ topics: filteredTopics });
    }
  },
  setSettings: (settings) =>
    set((state) => ({
      settings: { ...state.settings, ...settings },
    })),
}));
