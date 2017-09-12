exports.run = (client, message) => {
    var random = require("random-js")();
    var gif = [
        "https://i.imgur.com/9FPrEze.gif",
        "https://i.imgur.com/9IgAVLT.gif",
        "https://i.imgur.com/pYUAETI.gif",
        "https://i.imgur.com/EFov4d2.gif",
        "https://i.imgur.com/A3vDoIJ.gif",
        "https://i.imgur.com/0sEx9Vr.gif",
        "https://i.imgur.com/azSk5ba.gif",
        "https://i.imgur.com/VevqcMV.gif",
        "https://i.imgur.com/EEtzN8L.gif",
        "https://i.imgur.com/mvKvrMA.gif",
        "https://i.imgur.com/pZyiYW7.gif",
        "https://i.imgur.com/l5Dtr5S.gif"
    ];
    var rng = random.integer(0, gif.length-1);
    message.channel.send({ embed: {
            color: 0xb2ec5d,
            footer: {
              text: "Gif " + (rng + 1) + " : " + (gif.length).toString()
            },
            image: {
              url: gif[rng]
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
	name: "pout",
	description: "Pout",
	usage: "pout"
};
