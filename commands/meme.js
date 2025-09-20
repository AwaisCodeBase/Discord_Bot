import fetch from 'node-fetch';

export default async function memeGen(message) {
  const res = await fetch('https://meme-api.com/gimme');
  const data = await res.json();

  message.reply(`🤣 ${data.title}\n${data.url}`);
}
