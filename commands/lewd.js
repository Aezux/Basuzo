exports.run = (client, message) => {
    var random = require("random-js")();
    var gif = [
        "https://i.imgur.com/oSSbt6A.gif",
        "https://warosu.org/data/fa/img/0085/00/1405519724406.gif",
        "https://i.imgur.com/rxq7spV.gifv",
        "https://imgur.com/qknrvCO",
        "http://pa1.narvii.com/5739/ec4cfb18117ef0d286ea61f833064838f8ba21b9_hq.gif",
        "https://media.tenor.com/images/9862e3023816f54bc451ee1cfed2351f/tenor.gif"
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
	name: "lewd",
	description: "That's lewd!",
	usage: "lewd"
};
