const Discord = require("discord.js");
exports.run = (client, message) => {
    const embed = new Discord.RichEmbed()
        .setImage("https://media.giphy.com/media/26gR1v0rIDrjSsca4/giphy.gif")
        .setFooter("Respects have been paid.");
    message.channel.send({embed});
};

exports.conf = {
	enabled: true,
	guildOnly: false,
	aliases: [],
	permLevel: 0
};

exports.help = {
	name: "f",
	description: "Pay respects",
	usage: "f"
};
