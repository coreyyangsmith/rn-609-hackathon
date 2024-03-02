import dotenv from 'dotenv';
import OpenAI from 'openai';

dotenv.config();

async function callChatGPT(promptText) {
    const OPENAI_API_KEY = process.env.OPENAI_API_KEY;
    console.log('Using OPENAI_API_KEY:', process.env.OPENAI_API_KEY);
    console.log('Sending promptText:', promptText);

    const openai = new OpenAI({apiKey: OPENAI_API_KEY});

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