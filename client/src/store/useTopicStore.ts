import { create } from "zustand";
import { TopicFilter } from "../types/topic";

interface TopicStore {
  filter: TopicFilter;
  settings: {
    gptMode: boolean;
  };
  setFilter: (filter: Partial<TopicFilter>) => void;
  setSettings: (settings: Partial<TopicStore["settings"]>) => void;
  toggleGptMode: () => void;
}

export const useTopicStore = create<TopicStore>((set) => ({
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
  setSettings: (settings) =>
    set((state) => ({
      settings: { ...state.settings, ...settings },
    })),
  toggleGptMode: () =>
    set((state) => ({
      settings: { ...state.settings, gptMode: !state.settings.gptMode },
    })),
}));
