export type FilterType = "relationship" | "mood" | "situation";
export type FilterValue = string;

export const relationships = ["썸", "연애", "친구", "어색한 사이"] as const;

export const moods = ["설렘", "지루함", "진지함", "장난"] as const;

export const situations = ["첫 만남", "고백 전", "싸운 후", "일상"] as const;

export type RelationshipType = (typeof relationships)[number];
export type MoodType = (typeof moods)[number];
export type SituationType = (typeof situations)[number];
