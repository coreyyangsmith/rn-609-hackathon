/*
import { OpenAI } from 'openai';

const openai = new OpenAI({apiKey: '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'});

async function main() {
  const response = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo-0125',
      messages: [{
        role: "system",
        content: "You are a helpful assistant."
      },{
        role: "user",
        content: "tell me a joke."
      }]
  })
  console.log(response.choices[0].message.content);
}

main();
*/

import dotenv from 'dotenv';
import OpenAI from 'openai';

dotenv.config();

const OPENAI_API_KEY = process.env.OPENAI_API_KEY;
const ELEVENLABS_API_KEY = process.env.ELEVENLABS_API_KEY;

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

callChatGPT("What is the capital of France? How far is it from London?")