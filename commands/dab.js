exports.run = (client, message) => {
    message.channel.send({ embed: {
            color: 0xffffff,
            image: {
              url: "https://i.imgur.com/tBDENWm.gifv"
            }
        }
    });
};

exports.conf = {
	enabled: true,
	guildOnly: false,
	aliases: [],
	permLevel: 0
};

exports.help = {
	name: "dab",
	description: "Dab on em",
	usage: "dab"
};
