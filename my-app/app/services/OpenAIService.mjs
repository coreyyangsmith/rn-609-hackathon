import OpenAI from 'openai';

async function callChatGPT(promptText) {
  const apiKey = process.env.OPENAI_API_KEY;
  console.log('Using OPENAI_API_KEY:', apiKey);
  console.log('Sending promptText:', promptText);

  const openai = new OpenAI({ apiKey: apiKey });

  const response = await openai.chat.completions.create({
    model: 'gpt-3.5-turbo-0125',
    messages: [{
      role: "system",
      content: "You are a helpful assistant."
    }, {
      role: "user",
      content: promptText
    }]
  })

  const result = response.choices[0].message.content;
  console.log(response.choices[0].message.content);
  return result;
}

export { callChatGPT };