import { useParams, useNavigate } from "react-router-dom";
import { useTopicStore } from "../store/useTopicStore";

export const TopicDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { topics } = useTopicStore();

  const topic = topics.find((t) => t.id === id);

  if (!topic) {
    return (
      <div className="flex h-screen items-center justify-center">
        <p className="text-gray-500">토픽을 찾을 수 없습니다.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="mx-auto max-w-2xl">
        <button
          onClick={() => navigate(-1)}
          className="mb-6 flex items-center text-gray-600 hover:text-gray-900"
        >
          <svg
            className="mr-2 h-5 w-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
          뒤로 가기
        </button>

        <div className="rounded-lg bg-white p-8 shadow-lg">
          <div className="mb-6">
            <div className="flex flex-wrap gap-2">
              <span className="rounded-full bg-primary-100 px-3 py-1 text-sm font-medium text-primary-800">
                {topic.relationship}
              </span>
              <span className="rounded-full bg-primary-100 px-3 py-1 text-sm font-medium text-primary-800">
                {topic.mood}
              </span>
              <span className="rounded-full bg-primary-100 px-3 py-1 text-sm font-medium text-primary-800">
                {topic.situation}
              </span>
            </div>
          </div>

          <h1 className="mb-8 text-3xl font-bold text-gray-900">
            {topic.content}
          </h1>

          <div className="mt-8 flex justify-end">
            <button
              onClick={() => navigate(-1)}
              className="rounded-lg bg-primary-600 px-6 py-2 text-white hover:bg-primary-700"
            >
              닫기
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
