/*

import { Configuration, OpenAIApi } from 'openai';
import dotenv from 'dotenv';

dotenv.config();
const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

async function callChatGPT(promptText) {
  try {
    const response = await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: [{
        role: "system",
        content: "You are a helpful assistant."
      },{
        role: "user",
        content: promptText
      }],
    });

    return response.data.choices[0].message.content;

  } catch (error) {
    console.error('Error calling the OpenAI API:', error);
    throw error;
  }
}

export { callChatGPT };

*/