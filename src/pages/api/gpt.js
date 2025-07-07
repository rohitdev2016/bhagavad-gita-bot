import { Configuration, OpenAIApi } from "openai";

const openai = new OpenAIApi(
  new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
  })
);

export default async function handler(req, res) {
  const { question, languages } = req.body;

  const systemPrompt = `
You are a spiritual teacher. For the question provided, respond using relevant Bhagavad Gita verses in these languages: ${languages.join(", ")}.
Return only a JSON object like:
{
  "english": "Response in English",
  "hindi": "Response in Hindi",
  "telugu": "Response in Telugu"
}
Do not explain or add anything outside the JSON.
`;

  try {
    const completion = await openai.createChatCompletion({
      model: "gpt-4", // or gpt-3.5-turbo
      messages: [
        { role: "system", content: systemPrompt },
        { role: "user", content: question },
      ],
    });

    const content = completion.data.choices[0].message.content;

    // Debug log (only on server)
    console.log("GPT raw content:", content);

    const json = JSON.parse(content); // This is where it breaks if GPT didn't return proper JSON

    res.status(200).json({ responses: json });
  } catch (err) {
    console.error("GPT failed:", err.message);
    res.status(500).json({ error: "GPT failed" });
  }
}
