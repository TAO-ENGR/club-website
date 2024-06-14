// imports 
const express = require('express');
const axios = require('axios');
const dotenv = require('dotenv');
dotenv.config();

// app
const app = express();
const DISCORD_API_ROUTE = 'https://discord.com/api/v10';
const DISCORD_BOT_TOKEN = process.env.DISCORD_BOT_TOKEN;
const TAO_CHANNEL_ID = process.env.TAO_CHANNEL_ID;
const TEST_CHANNEL_ID = process.env.TEST_CHANNEL_ID;


app.get('/', (req, res) => {
    res.send('<h1>Hello, Node.js HTTP Server</h1>');
})

app.get('/announcements', async (req, res) => {
    try {
        const response = await axios.get(`${DISCORD_API_ROUTE}/channels/${TEST_CHANNEL_ID}/messages`, {
            headers: {
                Authorization: `Bot ${DISCORD_BOT_TOKEN}`
            }
        });

        res.json(response.data);
    } catch (error) {
        console.error(error);
    }
})

const port = 3000;

app.listen(port, '127.0.0.1', () => {
    console.log('Listening on http://127.0.0.1:3000');
  });