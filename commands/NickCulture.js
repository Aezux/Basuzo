const randomPuppy = require('random-puppy');
exports.run = (client, message) => {
    const event = randomPuppy.all("animelegs");
    event.once('data', url => message.channel.send(url));
}

exports.conf = {
	enabled: true,
	guildOnly: false,
	aliases: [],
	permLevel: 0
};

exports.help = {
	name: "NickCulture",
	description: "Possibly NSFW",
	usage: "NickCulture"
};
