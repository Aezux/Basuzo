const random = require('../rng.js');
exports.run = (client, message) => {
    var gif = [
        "https://68.media.tumblr.com/a9c341810735ba9939722e5abd2c66eb/tumblr_nmma081WG81rs4yfmo1_500.gif",
        "https://wolfesramblings.files.wordpress.com/2016/08/illya4.gif",
        "https://3.bp.blogspot.com/-lz4SPJvIDHo/UsKujLy6_VI/AAAAAAAACFA/u92s7J16gv4/s1600/Cry+004.gif",
        "https://s-media-cache-ak0.pinimg.com/originals/73/3d/59/733d5948098702b0d6f156819143b581.gif",
        "http://gif-finder.com/wp-content/uploads/2015/07/Anime-girl-crying.gif",
        "https://media.tenor.com/images/15dd673b469356e2129a0be61c81c3e1/tenor.gif"
    ];
    var rng = random.rng(0, gif.length-1);
    message.channel.send({ embed: {
            color: 0xffffff,
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
	name: "waa",
	description: "Gotta cry?",
	usage: "waa"
};
