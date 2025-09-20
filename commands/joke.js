import fetch from 'node-fetch';

export default async function randomJoke(message) {
  const res = await fetch('https://v2.jokeapi.dev/joke/Any');
  const data = await res.json();

  if (data.type === 'single') {
    message.reply(`😂 ${data.joke}`);
  } else {
    message.reply(`😂 ${data.setup}\n${data.delivery}`);
  }
}
