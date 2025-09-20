import fetch from 'node-fetch';
import { config } from '../config.js';

export default async function urlShorten(message, args) {
  if (!args[0]) return message.reply('❌ Please provide a URL to shorten.');

  const res = await fetch(`https://api-ssl.bitly.com/v4/shorten`, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${config.bitlyToken}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ long_url: args[0] })
  });

  const data = await res.json();
  if (data.link) {
    message.reply(`🔗 Shortened URL: ${data.link}`);
  } else {
    message.reply('⚠️ Failed to shorten URL.');
  }
}
