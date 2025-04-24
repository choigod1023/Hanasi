import express, { Express, Request, Response } from "express";
import cors from "cors";
import * as dotenv from "dotenv";
import { generateTopic } from "./controllers/topicController";

// .env 파일 로드
const result = dotenv.config();
if (result.error) {
  console.error("Error loading .env file:", result.error);
  process.exit(1);
}

if (!process.env.OPENAI_API_KEY) {
  console.error("OPENAI_API_KEY is not set in .env file");
  process.exit(1);
}

const app: Express = express();

app.use(cors());
app.use(express.json());

// Error handling middleware
app.use((err: Error, req: Request, res: Response, next: Function) => {
  console.error("Error:", err);
  res.status(500).json({
    error: "Internal Server Error",
    message: err.message,
  });
});

// Health check endpoint
app.get("/api/health", (req: Request, res: Response) => {
  try {
    res.json({
      status: "ok",
      openai: !!process.env.OPENAI_API_KEY,
    });
  } catch (error) {
    console.error("Health check error:", error);
    res.status(500).json({ error: "Health check failed" });
  }
});

// GPT 토픽 생성 API
app.post("/api/generate-topic", async (req: Request, res: Response) => {
  try {
    console.log("Received request:", req.body);
    await generateTopic(req, res);
  } catch (error) {
    console.error("Error in generate-topic route:", error);
    res.status(500).json({
      error: "Internal server error",
      message: error instanceof Error ? error.message : "Unknown error",
    });
  }
});

// Vercel에서 실행될 때는 app을 export
export default app;
