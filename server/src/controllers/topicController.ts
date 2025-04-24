import { Request, Response } from "express";
import OpenAI from "openai";
import * as dotenv from "dotenv";
const result = dotenv.config();
if (result.error) {
  console.error("Error loading .env file:", result.error);
  process.exit(1);
}
interface TopicRequest {
  relationship: string;
  mood: string;
  situation: string;
}

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export const generateTopic = async (
  req: Request<{}, {}, TopicRequest>,
  res: Response
) => {
  try {
    if (!process.env.OPENAI_API_KEY) {
      throw new Error("OPENAI_API_KEY is not set");
    }

    const { relationship, mood, situation } = req.body;

    if (!relationship || !mood || !situation) {
      return res.status(400).json({ error: "모든 필터 조건이 필요합니다." });
    }

    const prompt = `지금 나는 대화하려는 상대방과 아래와 같은 상황입니다.:
- 관계: ${relationship}
- 기분: ${mood}
- 상황: ${situation}

주제는 자연스럽고 대화하기 좋은 내용이어야 합니다. 대화를 이어갈 수 있도록 대화를 유도하게끔 말해주세요. 상대방이 불쾌하지 않게 위트있고 터프하게 만들어주세요. 문장은 반말어투로 만들어주세요. 느끼하거나 오글거리는 문장이면 절대 안됩니다.`;

    const completion = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        {
          role: "system",
          content:
            "당신은 대화 주제를 생성하는 전문가입니다. 주어진 조건에 맞는 자연스럽게 대화를 시작하게끔 짧고 굵게 한문장으로  만들어주세요.",
        },
        {
          role: "user",
          content: prompt,
        },
      ],
      temperature: 0.7,
      max_tokens: 100,
    });

    const topic = completion.choices[0].message.content?.trim();

    if (!topic) {
      throw new Error("토픽 생성에 실패했습니다.");
    }

    res.json({ topic });
  } catch (error) {
    console.error("GPT 토픽 생성 중 오류 발생:", error);
    res.status(500).json({ error: "토픽 생성 중 오류가 발생했습니다." });
  }
};
