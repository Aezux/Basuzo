const randomPuppy = require('random-puppy');
exports.run = (client, message) => {
    randomPuppy()
        .then(url => {
            message.channel.send({file:url});
    });
}

exports.conf = {
	enabled: true,
	guildOnly: false,
	aliases: [],
	permLevel: 0
};

exports.help = {
	name: "pupper",
	description: "Pupper pictures",
	usage: "pupper"
};
