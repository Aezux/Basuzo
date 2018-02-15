
        //888888b.
        //888  "88b                           Adrian Hyc
        //888  .88P
        //8888888K.   8888b.  .d8888b  888  888 88888888  .d88b.
        //888  "Y88b     "88b 88K      888  888    d88P  d88""88b
        //888    888 .d888888 "Y8888b. 888  888   d88P   888  888
        //888   d88P 888  888      X88 Y88b 888  d88P    Y88..88P
/**     //8888888P"  "Y888888  88888P'  "Y88888 88888888  "Y88P"
 * 
 * This command deletes a bunch of messages at once.
 */

const settings = require("../settings.json");
exports.run = (client, message, args) => {

	/* Checks if the user entered the command correctly or has the correct permissions */
	var messagecount = parseInt(args.join(" "));
	var permision = message.guild.member(client.user).hasPermission("MANAGE_MESSAGES");

	if (!permision) {
		return message.reply("You don't have the permisions to execute the command.");
	} if (isNaN(messagecount)) {
		return message.reply("Arguments are missing, use " + settings.prefix + "purge <number> (2-99)");
	} if (messagecount < 2 || messagecount > 99) {
		return message.reply("The amount has to be between 2 and 99");
	}

	/* Deletes messages in bulk from the channel */
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
