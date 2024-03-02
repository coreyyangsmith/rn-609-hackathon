import dotenv from 'dotenv';
import OpenAI from 'openai';
import { callChatGPT } from './OpenAIService.mjs';

dotenv.config();

const OPENAI_API_KEY = process.env.OPENAI_API_KEY;
const ELEVENLABS_API_KEY = process.env.ELEVENLABS_API_KEY;

console.log('OPENAI_API_KEY:', process.env.OPENAI_API_KEY);
console.log('ELEVENLABS_API_KEY:', process.env.ELEVENLABS_API_KEY);

// callChatGPT('What is the capital of France? One word only.');