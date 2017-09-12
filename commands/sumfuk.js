const Discord = require("discord.js");
exports.run = (client, message) => {
    message.channel.send({file:"https://cdn.discordapp.com/attachments/320293794702688277/337737914697908236/sumfuk.png"});
};

exports.conf = {
	enabled: true,
	guildOnly: false,
	aliases: [],
	permLevel: 0
};

exports.help = {
	name: "sumfuk",
	description: "u want, sum fuk?",
	usage: "sumfuk"
};
