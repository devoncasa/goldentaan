
import { GoogleGenAI, GenerateContentResponse } from "@google/genai";

class GeminiService {
    private ai: GoogleGenAI | null = null;
    private maxRetries = 3;
    private baseDelay = 1000;

    constructor() {
        if (process.env.API_KEY) {
            this.ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
        } else {
            console.warn("Gemini Service: API_KEY not found. Recipe generation will be disabled.");
        }
    }

    private async delay(ms: number) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    public async generateRecipe(ingredients: string): Promise<string> {
        if (!this.ai) {
            return Promise.resolve("### Recipe Generation Disabled\n\n*Recipe generation is currently unavailable. Please configure an API key to enable this feature.*");
        }
        
        const prompt = `You are a creative chef specializing in healthy, natural ingredients. Create a delicious recipe using the following ingredients: ${ingredients}. The recipe MUST prominently feature "Golden Taan Palmyra Palm Sugar" as a key sweetener or flavor component. The recipe should be easy to follow for a home cook. Please provide the response in English. Format the output with Markdown, using ### for the recipe title and * for list items.`;

        for (let i = 0; i < this.maxRetries; i++) {
            try {
                const response: GenerateContentResponse = await this.ai.models.generateContent({
                    model: 'gemini-2.5-flash',
                    contents: prompt,
                });
                
                const text = response.text;
                if (text) {
                    return text;
                }
                throw new Error("Empty response from API");

            } catch (error) {
                console.error(`Attempt ${i + 1} failed:`, error);
                if (i === this.maxRetries - 1) {
                    throw new Error("Failed to generate recipe after multiple retries.");
                }
                const delayTime = this.baseDelay * Math.pow(2, i);
                await this.delay(delayTime);
            }
        }
        // This line should not be reachable, but is here for type safety.
        throw new Error("Failed to generate recipe.");
    }
}

export const geminiService = new GeminiService();
