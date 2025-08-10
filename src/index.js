require('dotenv').config();
const { Client, GatewayIntentBits, Partials, Events } = require('discord.js');

function requireEnv(name) {
  const value = process.env[name];
  if (!value || value.trim() === '') {
    console.error(`Missing required environment variable: ${name}`);
    process.exit(1);
  }
  return value;
}

const discordToken = requireEnv('DISCORD_TOKEN');

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
  partials: [Partials.Channel],
});

client.once(Events.ClientReady, (c) => {
  console.log(`✅ Logged in as ${c.user.tag}`);
});

client.on(Events.MessageCreate, async (message) => {
  if (message.author.bot) return;

  // Simple command: reply to "ping"
  if (message.content.trim().toLowerCase() === 'ping') {
    await message.reply('Pong!');
    return;
  }

  // Demonstrate reading optional AI API key
  if (message.content.trim().toLowerCase() === 'ai-key?') {
    const aiKey = process.env.AI_API_KEY;
    if (aiKey) {
      // Mask output for safety
      const masked = aiKey.length > 8 ? `${aiKey.slice(0, 4)}...${aiKey.slice(-4)}` : 'set';
      await message.reply(`AI_API_KEY is configured (${masked})`);
    } else {
      await message.reply('AI_API_KEY is not set');
    }
  }
});

client.login(discordToken);

