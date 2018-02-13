const random = require('../rng.js');
exports.run = (client, message) => {
    var rng = random.rng(0, 1);
    if (rng === 0) message.channel.send("", {
        file: "./images/Heads.png"
    });
    else{
        message.channel.send("", {
            file: "./images/Tails.png"
        });
    }
}
exports.conf = {
	enabled: true,
	guildOnly: false,
	aliases: [],
	permLevel: 0
};

exports.help = {
	name: "coin",
	description: "Flips a coin",
	usage: "coin"
};
