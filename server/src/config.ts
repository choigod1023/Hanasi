import dotenv from "dotenv";

// 환경 변수 설정
if (process.env.NODE_ENV !== "production") {
  dotenv.config();
  console.log("Running in development mode, loading .env file");
} else {
  console.log("Running in production mode (Vercel)");
}

// 환경 변수 체크
if (!process.env.OPENAI_API_KEY) {
  console.error("OPENAI_API_KEY is not set");
  console.error("Current NODE_ENV:", process.env.NODE_ENV);
  process.exit(1);
}

export const config = {
  openaiApiKey: process.env.OPENAI_API_KEY,
  nodeEnv: process.env.NODE_ENV || "development",
};
