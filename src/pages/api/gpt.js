// pages/api/gpt.ts
import type { NextApiRequest, NextApiResponse } from "next";
import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { question, languages } = req.body;

  if (!question || !Array.isArray(languages)) {
    return res.status(400).json({ error: "Missing question or languages." });
  }

  const systemPrompt = `
You are a compassionate spiritual guide. Use verses from the Bhagavad Gītā to answer the user's question in these languages: ${languages.join(", ")}.
Return the answer in this format:
{
  "english": "...",
  "hindi": "...",
  "telugu": "..."
}
`;

  try {
    const completion = await openai.chat.completions.create({
      model: "gpt-4",
      messages: [
        { role: "system", content: systemPrompt },
        {
          role: "user",
          content: question,
        },
      ],
    });

    const content = completion.choices[0].message?.content ?? "{}";
    const parsed = JSON.parse(content);

    res.status(200).json({ responses: parsed });
  } catch (error: any) {
    console.error("OpenAI Error:", error);
    res.status(500).json({ error: "OpenAI request failed", detail: error.message });
  }
}
