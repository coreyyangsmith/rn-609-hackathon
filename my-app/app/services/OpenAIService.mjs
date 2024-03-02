import dotenv from 'dotenv';
import OpenAI from 'openai';

dotenv.config();

const OPENAI_API_KEY = process.env.OPENAI_API_KEY;

console.log('OPENAI_API_KEY:', process.env.OPENAI_API_KEY);

const openai = new OpenAI({apiKey: OPENAI_API_KEY});

async function callChatGPT(promptText) {
    const response = await openai.chat.completions.create({
        model: 'gpt-3.5-turbo-0125',
        messages: [{
          role: "system",
          content: "You are a helpful assistant."
        },{
          role: "user",
          content: promptText
        }]
    })

    const result = response.choices[0].message.content;
    console.log(response.choices[0].message.content);
    return result;
}

export { callChatGPT };
