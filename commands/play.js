exports.run = (client, message, args) => {
    let playing = args.join(" ");
    if (!playing) message.reply("Give me something to play!");
    message.client.user.setPresence({ game: { name: playing, type: 0 } });
};

exports.conf = {
	enabled: true,
	guildOnly: false,
	aliases: [],
	permLevel: 1
};

exports.help = {
	name: "play",
	description: "Change bot game",
	usage: "play"
};
