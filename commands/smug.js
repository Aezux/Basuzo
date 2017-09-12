exports.run = (client, message) => {
    var random = require("random-js")();
    var gif = [
        "http://i2.kym-cdn.com/photos/images/newsfeed/000/926/994/729.gif",
        "http://i3.kym-cdn.com/photos/images/original/001/161/167/eda.gif",
        "http://funnypictures4.fjcdn.com/funny_gifs/Serious+to+smug+inb4+all+the+comments+are+smuganimeface+jpg_72dc4d_6117523.gif",
        "http://49.media.tumblr.com/c8793964d02349bb44a554a0f11b386e/tumblr_nw51hkzaZC1qmdb57o1_500.gif",
        "https://media.giphy.com/media/o7kajolOJamd2/giphy.gif",
        "http://i0.kym-cdn.com/photos/images/original/000/756/947/64b.gif"
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
	name: "smug",
	description: "Smug",
	usage: "smug"
};
