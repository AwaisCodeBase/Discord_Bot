import fetch from 'node-fetch';
import { config } from '../config.js';

export default async function weatherInfo(message, args) {
  if (!args[0]) return message.reply('❌ Please provide a city name.');

  const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${args[0]}&appid=${config.weatherKey}&units=metric`);
  const data = await res.json();

  if (data.cod !== 200) {
    return message.reply('⚠️ Could not fetch weather.');
  }

  message.reply(`🌤 Weather in **${data.name}**: ${data.main.temp}°C, ${data.weather[0].description}`);
}
