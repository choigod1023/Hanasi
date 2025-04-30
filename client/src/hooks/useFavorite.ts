import { Topic } from "../types/topic";
import { favoriteStore } from "../store/FavoriteStore";
import {
  useMutation,
  useQueryClient,
  QueryClient,
} from "@tanstack/react-query";

// 개별 토픽의 즐겨찾기 상태 관리
export const useFavorite = (topic: Topic | null) => {
  const { favorites, addFavorite, removeFavorite } = favoriteStore();

  const toggleFavorite = () => {
    if (!topic) return;

    const isCurrentlyFavorite = favorites.some((f) => f.id === topic.id);
    if (isCurrentlyFavorite) {
      removeFavorite(topic.id);
    } else {
      addFavorite(topic);
    }
  };

  const isFavorite = (id: string) => favorites.some((f) => f.id === id);

  return {
    toggleFavorite,
    isFavorite,
  };
};

// 즐겨찾기 목록 관리
export const useFavorites = () => {
  const { favorites } = favoriteStore();

  return {
    favorites,
    ...useFavoriteMutations(),
  };
};

// Optimistic update 유틸리티
const optimisticUpdate = (
  queryClient: QueryClient,
  newData: (old: Topic[]) => Topic[]
) => {
  queryClient.setQueryData(["favorites"], newData);
};

// 에러 처리 유틸리티
const handleError = (
  queryClient: QueryClient,
  context: { previousFavorites?: Topic[] } | undefined
) => {
  if (context?.previousFavorites) {
    queryClient.setQueryData(
      ["favorites"],
      context.previousFavorites as Topic[]
    );
  }
};

// 즐겨찾기 추가 mutation
const useAddFavoriteMutation = () => {
  const queryClient = useQueryClient();
  const { addFavorite } = favoriteStore();

  return useMutation<Topic[], Error, Topic, { previousFavorites?: Topic[] }>({
    mutationFn: async (topic: Topic) => {
      addFavorite(topic);
      return queryClient.getQueryData<Topic[]>(["favorites"]) || [];
    },
    onMutate: async (newTopic) => {
      await queryClient.cancelQueries({ queryKey: ["favorites"] });
      const previousFavorites = queryClient.getQueryData<Topic[]>([
        "favorites",
      ]);
      optimisticUpdate(queryClient, (old: Topic[] = []) => [...old, newTopic]);
      return { previousFavorites };
    },
    onError: (err, newTopic, context) => {
      handleError(queryClient, context);
    },
  });
};

// 즐겨찾기 제거 mutation
const useRemoveFavoriteMutation = () => {
  const queryClient = useQueryClient();
  const { removeFavorite } = favoriteStore();

  return useMutation<Topic[], Error, string, { previousFavorites?: Topic[] }>({
    mutationFn: async (topicId: string) => {
      removeFavorite(topicId);
      return queryClient.getQueryData<Topic[]>(["favorites"]) || [];
    },
    onMutate: async (topicId) => {
      await queryClient.cancelQueries({ queryKey: ["favorites"] });
      const previousFavorites = queryClient.getQueryData<Topic[]>([
        "favorites",
      ]);
      optimisticUpdate(queryClient, (old: Topic[] = []) =>
        old.filter((t) => t.id !== topicId)
      );
      return { previousFavorites };
    },
    onError: (err, topicId, context) => {
      handleError(queryClient, context);
    },
  });
};

// 즐겨찾기 변경 관련 mutation
const useFavoriteMutations = () => {
  const addFavoriteMutation = useAddFavoriteMutation();
  const removeFavoriteMutation = useRemoveFavoriteMutation();

  return {
    addToFavorites: addFavoriteMutation.mutate,
    removeFromFavorites: removeFavoriteMutation.mutate,
    isAdding: addFavoriteMutation.isPending,
    isRemoving: removeFavoriteMutation.isPending,
  };
};
