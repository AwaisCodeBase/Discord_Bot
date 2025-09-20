// const { Client, GatewayIntentBits } = require("discord.js")
// require("dotenv").config();

// const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent] });

// client.on('messageCreate', (message) => {
//     if(message.author.bot) return; 
//     if(message.content.startsWith("create")){
//         const url = message.content.split("create")[1];
//         return message.reply({
//             content: "Generating short ID for " + url
//         })
//     }else if(message.content.startsWith("how are you?")){
//         return message.reply({
//             content: "I am fine, thank you for asking!"
//         })
//     }else if(message.content.startsWith("can you tell me something about yourself?")){
//     message.reply({
//         content: "yeah sure, I am a bot created by Awais Farooq. I can help you with various tasks like creating short links, answering questions, and more!"
//     });
// }
// })

// client.on("interactionCreate", interaction => {
//     console.log(interaction);
//     interaction.reply({
//         content: "Pong!"
//     });
// })

// client.login(process.env.DISCORD_TOKEN);











import 'dotenv/config';
import { Client, GatewayIntentBits } from 'discord.js';
import { config } from './config.js';
import urlShorten from './commands/urlshorten.js';
import weatherInfo from './commands/weather.js';
import wikiSearch from './commands/wiki.js';
import randomJoke from './commands/joke.js';
import memeGen from './commands/meme.js';
import randomFact from './commands/fact.js';

const client = new Client({
  intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent]
});

client.on('ready', () => {
  console.log(`✅ Logged in as ${client.user.tag}`);
});

client.on('messageCreate', async (message) => {
  if (message.author.bot) return;

  const args = message.content.trim().split(/ +/);
  const command = args.shift().toLowerCase();

  if (command === '!shorten') return urlShorten(message, args);
  if (command === '!weather') return weatherInfo(message, args);
  if (command === '!wiki') return wikiSearch(message, args);
  if (command === '!joke') return randomJoke(message);
  if (command === '!meme') return memeGen(message);
  if (command === '!fact') return randomFact(message);
});

client.login(config.discordToken);
