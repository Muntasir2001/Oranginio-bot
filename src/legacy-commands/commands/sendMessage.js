const getTextChannel = require('../utilities/getTextChannel');
const getTextChannelByGuild = require('../utilities/getTextChannelByGuild');

const sendMessage = async (message, CMD_NAME, args, client) => {
	if (CMD_NAME === 'sm') {
		if (args.length !== 0) {
			const channel = await getTextChannel('841309073197760606', message);
			// const channel = await getTextChannelByGuild(
			// 	'841309073197760602',
			// 	'962339539437903902',
			// 	client,
			// 	message,
			// );

			return channel.send(args.join(' '));
		} else {
			return message.channel.send('Please put a message');
		}
	}
};

module.exports = sendMessage;
