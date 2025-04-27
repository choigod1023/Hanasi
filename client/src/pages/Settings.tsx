import { useTopicStore } from "../store/useTopicStore";

const ToggleOnButton = ({ onClick }: { onClick: () => void }) => (
  <button
    onClick={onClick}
    className="px-4 py-2 text-sm font-medium text-white transition-all rounded-full shadow-md bg-romantic-text"
  >
    ON
  </button>
);

const ToggleOffButton = ({ onClick }: { onClick: () => void }) => (
  <button
    onClick={onClick}
    className="px-4 py-2 text-sm font-medium transition-all rounded-full bg-white/50 text-romantic-subtitle hover:bg-soft-pink"
  >
    OFF
  </button>
);

export const Settings = () => {
  const { settings, toggleGptMode } = useTopicStore();

  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold text-romantic-title">설정</h1>
      <div className="p-6 shadow-lg rounded-xl bg-white/50 backdrop-blur-sm">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-xl font-semibold text-romantic-title">
              GPT 추천 모드
            </h2>
            <p className="mt-2 text-romantic-text">
              GPT를 사용하여 주제를 생성합니다.
            </p>
          </div>
          {settings.gptMode ? (
            <ToggleOnButton onClick={toggleGptMode} />
          ) : (
            <ToggleOffButton onClick={toggleGptMode} />
          )}
        </div>
      </div>
    </div>
  );
};
