export async function sendMsgToOpenAI(message) {
    const MAX_RETRIES = 3;
    let retryCount = 0;
    
    const key = import.meta.env.VITE_OPENAI_API_KEY;

    while (retryCount < MAX_RETRIES) {
      const response = await fetch(
        "https://api-inference.huggingface.co/models/gpt2",
        {
          method: "POST",
          headers: { 
            "Content-Type": "application/json",
            "Authorization": `Bearer ${key}`,
          },
          body: JSON.stringify({ inputs: message }),
        }
      );
      
      if (response.status === 503) { // Model is loading
        await new Promise(resolve => setTimeout(resolve, 5000)); // Wait 5 sec
        retryCount++;
        continue;
      }
      
      const result = await response.json();
      return result[0]?.generated_text || "No response";
    }
    
    return "AI is busy. Please try again later.";
  }