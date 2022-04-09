const sendMessage = require('./commands/sendMessage');

const legacyCommands = {
	sm: sendMessage,
};

module.exports = legacyCommands;
