import { useTopicStore } from "../store/useTopicStore";

export const Settings = () => {
  const { settings, toggleGptMode } = useTopicStore();

  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold text-romantic-title">설정</h1>
      <div className="rounded-xl bg-white/50 backdrop-blur-sm p-6 shadow-lg">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-xl font-semibold text-romantic-title">
              GPT 추천 모드
            </h2>
            <p className="mt-2 text-romantic-text">
              GPT를 사용하여 주제를 생성합니다.
            </p>
          </div>
          <button
            onClick={toggleGptMode}
            className={`rounded-full px-4 py-2 text-sm font-medium transition-all ${
              settings.gptMode
                ? "bg-romantic-text text-white shadow-md"
                : "bg-white/50 text-romantic-subtitle hover:bg-soft-pink"
            }`}
          >
            {settings.gptMode ? "ON" : "OFF"}
          </button>
        </div>
      </div>
    </div>
  );
};
