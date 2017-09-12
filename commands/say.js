exports.run = (client, message, args) => {
    let say = args.join(" ");
    if (!say) return message.reply("BAKAAAAAAAAAAAAAAA!!!!!");
    message.delete();
    message.channel.send(say);
};

exports.conf = {
	enabled: true,
	guildOnly: false,
	aliases: [],
	permLevel: 0
};

exports.help = {
	name: "say",
	description: "Say a message",
	usage: "say [message]"
};
