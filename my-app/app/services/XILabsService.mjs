async function callXILabs(text) {
    const ELEVENLABS_API_KEY = process.env.ELEVENLABS_API_KEY;
    console.log('Using ELEVENLABS_API_KEY:', process.env.ELEVENLABS_API_KEY);
    console.log('Sending Text to Speech:', text);

    const options = {
        method: 'POST',
        headers: {
          'xi-api-key': ELEVENLABS_API_KEY,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            model_id: "eleven_turbo_v2",
            text: text
        })
      };
      
    const response = await fetch('https://api.elevenlabs.io/v1/text-to-speech/21m00Tcm4TlvDq8ikWAM?output_format=mp3_44100_128', options);
    console.log("Recieved response of type: " + response.headers.get('Content-Type'));

    return response;

    // const arrayBuffer = await response.arrayBuffer();
    // const buffer = Buffer.from(arrayBuffer);

    // console.log("Recieved bytestream.");

    // return buffer;

    // const audio = response.blob();
    // return audio;
}

export { callXILabs };