import express, { Express, Request, Response } from "express";
import cors from "cors";
import { generateTopic } from "./controllers/topicController";
import "./config"; // 환경 변수 설정을 위해 import

const app: Express = express();
const PORT = process.env.PORT || 3001;

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
      environment: process.env.NODE_ENV,
    });
  } catch (error) {
    console.error("Health check error:", error);
    res.status(500).json({ error: "Health check failed" });
  }
});

// GPT 토픽 생성 API
app.post("/api/topics/generate", async (req: Request, res: Response) => {
  try {
    const { relationship, mood, situation } = req.body;
    await generateTopic(req, res);
  } catch (error) {
    console.error("Error generating topic:", error);
    res.status(500).json({ error: "Failed to generate topic" });
  }
});

// Vercel에서 실행될 때는 app을 export
if (process.env.NODE_ENV !== "production") {
  app.listen(PORT, () => {
    // Server started
  });
}

export default app;
