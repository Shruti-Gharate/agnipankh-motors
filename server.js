import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import OpenAI from "openai";

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// OpenAI client
const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

// Simple chat endpoint
app.post("/api/chat", async (req, res) => {
  try {
    const { message } = req.body;
    if (!message) {
      return res.status(400).json({ error: "No message provided" });
    }

    // Call OpenAI Chat Completions
    const completion = await client.chat.completions.create({
      model: "gpt-4.1-mini", // good, cheap model
      messages: [
        {
          role: "system",
          content:
            "You are the Agnipankh Motors assistant. Answer questions in a clear, friendly way. If asked about the vehicle, answer as an EV off-road ATV made in India. If you are not sure of something, say you don't know.",
        },
        {
          role: "user",
          content: message,
        },
      ],
      max_completion_tokens: 300,
    });

    const reply =
      completion.choices?.[0]?.message?.content ||
      "Sorry, I couldn't generate a response.";

    res.json({ reply });
  } catch (error) {
    console.error("Error in /api/chat:", error);
    res.status(500).json({ error: "Error talking to the AI service." });
  }
});

app.listen(port, () => {
  console.log(`Backend listening on http://localhost:${port}`);
});
