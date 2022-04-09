const getTextChannel = async (channelID, message) => {
	try {
		const textChannel = await message.guild.channels.resolve(channelID);

		return textChannel;
	} catch (errr) {
		return;
	}
};

module.exports = getTextChannel;
