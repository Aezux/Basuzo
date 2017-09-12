exports.run = (client, message) => {
    var random = require("random-js")();
    var gif = [
        "https://media.giphy.com/media/m6etefcEsTANa/giphy.gif",
        "http://pa1.narvii.com/5686/495d51b6ef33bd12f3ea6a95947fa999012fed5e_hq.gif",
        "https://i.imgur.com/TgvWIG2.gif",
        "https://33.media.tumblr.com/3228ae5f781cd63c252863d0078ba4ba/tumblr_nrb51zfAqB1uozoiko1_500.gif",
        "https://i.imgflip.com/1c3vbw.gif",
        "https://i.imgur.com/j94Pt33.gif",
        "https://i.imgur.com/T9mJkxo.gif",
        "https://i.imgur.com/yUdj3VT.gif",
        "https://i.imgur.com/NIs05qa.gif",
        "https://i.imgur.com/NhrQcPX.gif",
        "https://i.imgur.com/JEd1K04.gif"
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
	name: "bad",
	description: "No, bad!",
	usage: "bad"
};
