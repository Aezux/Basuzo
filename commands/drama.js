exports.run = (client, message) => {
    var random = require("random-js")();
    var gif = [
        "http://i.imgur.com/IwJnS7s.gif",
        "http://i.imgur.com/2QBVNEy.gif",
        "http://i.imgur.com/Vflx6FT.gif",
        "http://i.imgur.com/GbIaoT0.gif",
        "http://i.imgur.com/H3NmH9A.gif",
        "http://i.imgur.com/mF0tsPR.gif",
        "http://i.imgur.com/lSsR6sD.gif",
        "http://i.imgur.com/PSi8gtA.gif",
        "http://i.imgur.com/iMJOWmk.gif",
        "http://i.imgur.com/tx0RTpO.gif",
        "http://i.imgur.com/7qQ1WXA.gif",
        "http://i.imgur.com/373kW4w.gif",
        "http://i.imgur.com/hIFLJlG.gif",
        "http://i.imgur.com/80bF923.gif",
        "http://i.imgur.com/0nBAsqC.gif",
        "http://i.imgur.com/KKVHZTt.gif",
        "http://i.imgur.com/DdnIFi2.gif",
        "http://i.imgur.com/OX2r7f3.gif",
        "http://i.imgur.com/NdyVfGj.gif",
        "http://i.imgur.com/5eJXar4.gif",
        "http://i.imgur.com/qP9Mbm2.gif",
        "http://i.imgur.com/E6Fkk97.gif",
        "http://i.imgur.com/BIJdWtz.gif",
        "http://i.imgur.com/rRAKiSv.gif",
        "http://i.imgur.com/lj1UGpj.gif",
        "http://i.imgur.com/jqr2gUM.gif"
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
	name: "drama",
	description: "This gon be good",
	usage: "drama"
};
