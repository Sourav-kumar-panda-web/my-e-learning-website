const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

app.post('/ask', async (req, res) => {
    const userMessage = req.body.message;
    let reply = "Sorry, I didn't understand that.";

    // Simple AI Logic (You can connect to GPT API here)
    if (userMessage.toLowerCase().includes("hello")) {
        reply = "Hello! I'm Lia, your assistant.";
    } else if (userMessage.toLowerCase().includes("course")) {
        reply = "We offer many courses like Web Development, AI, and more!";
    }

    res.json({ reply });
});

app.listen(3000, () => console.log('Lia API is running on port 3000'));
