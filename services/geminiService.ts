import { GoogleGenAI } from "@google/genai";

const apiKey = process.env.API_KEY || ''; // In a real app, strict env check.

// Helper to check if API key is present
export const isGeminiConfigured = (): boolean => {
  return !!apiKey && apiKey.length > 0;
};

export const generateProjectDescription = async (title: string, category: string, client: string): Promise<string> => {
  if (!apiKey) {
    console.warn("Gemini API Key missing");
    return "Please configure the Gemini API Key in your environment variables to use AI features.";
  }

  try {
    const ai = new GoogleGenAI({ apiKey });
    const model = 'gemini-2.5-flash';
    
    const prompt = `
      Write a compelling, sophisticated, and cinematic project description for a portfolio item.
      Project Title: ${title}
      Category: ${category}
      Client: ${client}
      
      Tone: Professional, Artistic, Apple-style minimalism.
      Length: 2-3 sentences.
    `;

    const response = await ai.models.generateContent({
      model: model,
      contents: prompt,
    });

    return response.text || "Could not generate description.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Error generating content. Please try again.";
  }
};
