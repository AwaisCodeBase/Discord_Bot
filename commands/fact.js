import fetch from 'node-fetch';

export default async function randomFact(message) {
  const res = await fetch('https://uselessfacts.jsph.pl/random.json?language=en');
  const data = await res.json();

  message.reply(`🤯 ${data.text}`);
}
