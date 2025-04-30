export const FavoritesFallback = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pastel-pink via-pastel-lavender to-pastel-sky">
      <div className="container px-4 py-8 mx-auto">
        <div className="mb-8">
          <h1 className="mb-4 text-3xl font-bold text-center text-romantic-title">
            즐겨찾기
          </h1>
        </div>
        <div className="max-w-2xl p-6 mx-auto mt-8 text-center shadow-lg rounded-xl bg-white/50 backdrop-blur-sm">
          <p className="text-romantic-text">즐겨찾기 페이지를 불러오는 중...</p>
        </div>
      </div>
    </div>
  );
};
