import { GoogleGenAI } from "@google/genai";
const ai = new GoogleGenAI({
  apiKey: "AIzaSyB76VQCCAyPH9uyrz5SOxFFBkw7R4r_Sgw",
});
async function chatBot(prompt) {
  const response = await ai.models.generateContent({
    model: "gemini-2.0-flash",
    contents: prompt,
    config: {
      maxOutputTokens: 1000,
      temperature: 0.1,
    },
  });
  console.log(response.text);
  return response.text;
}
export default chatBot;
