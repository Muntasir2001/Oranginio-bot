const getTextChannel = require('../utilities/getTextChannel');
const getTextChannelByGuild = require('../utilities/getTextChannelByGuild');

const sendMessage = async (message, CMD_NAME, args, client) => {
	if (CMD_NAME === 'sm') {
		if (args.length !== 0) {
			// const channel = await getTextChannel('962310317331849276', message);
			const channel = await getTextChannelByGuild(
				'374231512599494667',
				'681963075368124477',
				client,
				message,
			);

			return channel.send(args.join(' '));
		} else {
			return message.channel.send('Please put a message');
		}
	}
};

module.exports = sendMessage;
