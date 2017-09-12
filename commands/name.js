exports.run = (client, message) => {
    var Chance = require('chance'),
        chance = new Chance();
    var names = "";
    for (i=0; i<10; i++) {
        names += ":small_blue_diamond: " + chance.name();
        if (i<9) names += "\n";
    }
    message.channel.send("**10 random generated names:\n**" + names);
};

exports.conf = {
	enabled: true,
	guildOnly: false,
	aliases: [],
	permLevel: 0
};

exports.help = {
	name: "name",
	description: "Name generator",
	usage: "name"
};
