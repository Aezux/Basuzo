var google = require('google');
exports.run = (client, message, args) => {
    let search = args.join('+');
    if (!search) return message.reply("It's kinda pointless to search for nothing.");
    google(search, function(err, res) {
        var link = res.links[0];
        message.channel.send(link.href);
    })
};

exports.conf = {
	enabled: true,
	guildOnly: false,
	aliases: [],
	permLevel: 0
};

exports.help = {
	name: "google",
	description: "Returns the first google search link.",
	usage: "google [search]"
};
