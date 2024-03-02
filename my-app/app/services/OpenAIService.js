const OPENAI_API_KEY = process.env.OPENAI_API_KEY;

async function callChatGPT(promptText) {
  /*
  Takes in a string promptText and returns a string response from the OpenAI GPT-3.5-turbo model.
  */
  try {
    const response = await fetch('https://api.openai.com/v1/engines/gpt-3.5-turbo/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${OPENAI_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: "gpt-3.5-turbo-0125",
        messages: [{
          role: "system",
          content: "You are a helpful assistant."
        },{
          role: "user",
          content: promptText
        }],
      }),
    });

    const data = await response.json();
    
    if (!response.ok) {
      throw new Error(`Error: ${response.status} ${data.error}`);
    }

    return data.choices[0].message.content;

  } catch (error) {
    console.error('Error calling the OpenAI API:', error);
    throw error;
  }
}

export { callChatGPT };
