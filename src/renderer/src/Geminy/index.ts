import myStrore from "@renderer/store";

const {
    GoogleGenerativeAI,
  
  } = require("@google/generative-ai");
  
  const apiKey = process.env.GEMINI_API_KEY;
  const genAI = new GoogleGenerativeAI(apiKey);
  
  const model = genAI.getGenerativeModel({
    model: "gemini-2.0-flash-exp",
  });
  
  const generationConfig = {
    temperature: 1,
    topP: 0.95,
    topK: 40,
    maxOutputTokens: 8192,
    responseMimeType: "text/plain",
  };
  const {data} = myStrore()
  async function run(text:string) {
    const chatSession = model.startChat({
      generationConfig,
      history: [...data],
    });
    const result = await chatSession.sendMessage(text);
    return result.response.text()
  }
  
  export default run