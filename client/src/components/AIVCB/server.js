const express = require('express');
const axios = require('axios');
require('dotenv').config();

const app = express();
app.use(express.json());

// Start the server
const port = 3001;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

app.post('/chat', async (req, res) => {
    const { message } = req.body;
  
    // TODO: Implement Chat GPT logic
  
    res.send({ reply: 'Bot reply goes here' });
  });

//   HTTP request to the OpenAI API, passing the message as input
const apiUrl = 'https://api.openai.com/v1/engines/davinci-codex/completions';

app.post('/chat', async (req, res) => {
  const { message } = req.body;

  try {
    const response = await axios.post(apiUrl, {
      prompt: message,
      max_tokens: 50,
      temperature: 0.6,
      n: 1
    }, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.REACT_APP_OPENAI_API_KEY}`
      }
    });

    const botReply = response.data.choices[0].text.trim();
    res.send({ reply: botReply });
  } catch (error) {
    console.error(error);
    res.status(500).send({ error: 'An error occurred' });
  }
});