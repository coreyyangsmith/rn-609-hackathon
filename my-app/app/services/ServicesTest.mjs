import dotenv from 'dotenv';
dotenv.config();

import { callChatGPT } from './OpenAIService.mjs';
import { callXILabs } from './XILabsService.mjs';

const OPENAI_API_KEY = process.env.OPENAI_API_KEY;
const ELEVENLABS_API_KEY = process.env.ELEVENLABS_API_KEY;

console.log('OPENAI_API_KEY:', process.env.OPENAI_API_KEY);
console.log('ELEVENLABS_API_KEY:', process.env.ELEVENLABS_API_KEY);

// callChatGPT('What is the capital of France? One word only.');
callXILabs('This is a demo text');