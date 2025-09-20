import fetch from 'node-fetch';

export default async function wikiSearch(message, args) {
  if (!args[0]) return message.reply('❌ Please provide a search term.');

  const search = args.join(' ');
  const res = await fetch(`https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(search)}`);
  const data = await res.json();

  if (data.type === 'disambiguation' || !data.extract) {
    return message.reply('⚠️ No exact match found.');
  }

  message.reply(`📚 **${data.title}**\n${data.extract}\n🔗 ${data.content_urls.desktop.page}`);
}
