import { create } from "zustand";
import { TopicState } from "../types/topic";

export const topicStore = create<TopicState>((set) => ({
  topics: [],
  currentTopic: null,
  loading: false,
  error: null,
  filter: {
    relationship: null,
    mood: null,
    situation: null,
  },
  settings: {
    gptMode: false,
  },
  setFilter: (filter) =>
    set((state) => ({ filter: { ...state.filter, ...filter } })),
  setSettings: (settings) =>
    set((state) => ({ settings: { ...state.settings, ...settings } })),
  toggleGptMode: () =>
    set((state) => ({
      settings: { ...state.settings, gptMode: !state.settings.gptMode },
    })),
}));
