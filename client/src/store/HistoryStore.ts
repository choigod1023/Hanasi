import { create } from "zustand";
import { HistoryState } from "../types/history";

export const historyStore = create<HistoryState>((set) => ({
  historyTopics: [],
  addToHistory: (topic) =>
    set((state) => ({
      historyTopics: [...state.historyTopics, topic],
    })),
  clearHistory: () => set({ historyTopics: [] }),
}));
