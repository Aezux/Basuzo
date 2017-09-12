exports.run = (client, message) => {
    message.channel.send("Ping: \`" + client.ping + "ms\`");
};

exports.conf = {
	enabled: true,
	guildOnly: false,
	aliases: [],
	permLevel: 0
};

exports.help = {
	name: "ping",
	description: "Test server latency",
	usage: "ping"
};
