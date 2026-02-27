import { streamText } from "ai";
import { createGoogleGenerativeAI } from "@ai-sdk/google";
import { systemPrompt } from "@/lib/assistant/system-prompt";
import { buildSystemPrompt } from "@/lib/assistant/project-context";

// Require API Key
if (!process.env.GOOGLE_GENERATIVE_AI_API_KEY) {
  console.warn("GOOGLE_GENERATIVE_AI_API_KEY is missing.");
}

const google = createGoogleGenerativeAI({
  apiKey: process.env.GOOGLE_GENERATIVE_AI_API_KEY || "",
});

export async function POST(req: Request) {
  try {
    const { messages } = await req.json();

    // Map UIMessages to standard CoreMessages because the client sends `parts`
    // instead of `content` in AI SDK 6.0 sendMessage calls.
    const coreMessages = messages.map((m: any) => ({
      role: m.role,
      content: m.content || (m.parts ? m.parts.map((p: any) => p.text).join("") : ""),
    }));

    // Keep only the last 6 messages to prevent context bloat and act as session memory
    const recentMessages = coreMessages.slice(-6);

    const lastUserMessage =
      recentMessages.findLast((m: any) => m.role === "user")?.content?.toLowerCase() || "";

    const finalSystemPrompt = buildSystemPrompt(lastUserMessage, systemPrompt);

    const result = await streamText({
      model: google(process.env.GOOGLE_GENERATIVE_AI_MODEL || "gemini-2.5-flash-lite"),
      system: finalSystemPrompt,
      messages: recentMessages,
      temperature: 0.7, // Balanced for informative yet creative responses
    });

    return result.toUIMessageStreamResponse();
  } catch (error) {
    console.error("Error in AI Assistant API:", error);
    return new Response(JSON.stringify({ error: "Failed to process request" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
