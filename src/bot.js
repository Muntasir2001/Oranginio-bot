require('dotenv').config();
const { Client, Intents, Constants } = require('discord.js');

const commandHandler = require('./legacy-commands/commandHandler');

const client = new Client({
	partials: ['MESSAGE', 'REACTION'],
	intents: [
		Intents.FLAGS.GUILDS,
		Intents.FLAGS.GUILD_MESSAGES,
		Intents.FLAGS.DIRECT_MESSAGES,
		Intents.FLAGS.GUILD_BANS,
		Intents.FLAGS.GUILD_MESSAGE_TYPING,
	],
});

client.on('ready', () => {
	console.log(`${client.user.tag} has logged in BEEP BEEP 🤖`);
	// console.log(client.guilds.cache.map((guild) => guild.id));
});

client.on('messageCreate', (message) => commandHandler(message, client));

client.login(process.env.DISCORDJS_BOT_TOKEN);

module.exports = { client };
