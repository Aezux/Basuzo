const settings = require('../settings.json');
exports.run = (client, message, args) => {
	let messagecount = parseInt(args.join(' '));
	let permision = message.guild.member(client.user).hasPermission('MANAGE_MESSAGES');
	if (!permision) return message.reply("You don't have the permisions to execute the command.");
	if (isNaN(messagecount)) return message.reply("Arguments are missing, use " + settings.prefix + "purge <number> (2-99)");
	if (messagecount < 2 || messagecount > 99) return message.reply("The amount has to be between 2 and 99");
	message.channel.fetchMessages({limit: messagecount + 1}).then(messages => message.channel.bulkDelete(messages));
};

exports.conf = {
	enabled: true,
	guildOnly: false,
	aliases: [],
	permLevel: 0
};

exports.help = {
	name: "purge",
	description: "Delete multiple messages",
	usage: "purge [number](2-99)"
};
