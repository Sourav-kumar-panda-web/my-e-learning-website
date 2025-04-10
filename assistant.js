async function sendMessage(event) {
  if (event.key === "Enter") {
      const input = document.getElementById("lia-input");
      const userMessage = input.value;
      input.value = "";

      document.getElementById("lia-response").innerText = "Thinking...";

      const response = await fetch('https://your-backend-api-url.vercel.app/ask', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ message: userMessage })
      });

      const data = await response.json();
      document.getElementById("lia-response").innerText = data.reply;
  }
}

