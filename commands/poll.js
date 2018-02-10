exports.run = (client, message, args) => {
    let poll = args.join(" ");
    if (!poll) return message.channel.send("Nothing to poll.");
    message.delete();

    var Volt = message.client.guilds.find("name", "Volt");
    let yes = Volt.emojis.find("name", "YES");
    let no = Volt.emojis.find("name", "NO");
    poll = "**New Poll**:\n:scales: " + poll;
    if (poll[poll.length-1] != "?") poll += "?";
    message.channel.send(poll)
        .then(function (message) {
            message.react(`${yes.id}`);
            message.react(`${no.id}`);
        })
}

exports.conf = {
	enabled: true,
	guildOnly: false,
	aliases: [],
	permLevel: 0
};

exports.help = {
	name: "poll",
	description: "Poll something",
	usage: "poll [question]"
};
