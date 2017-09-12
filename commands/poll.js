exports.run = (client, message, args) => {
    let poll = args.join(" ");
    if (!poll) return message.channel.send("Nothing to poll.");
    message.delete();
    let yes = message.guild.emojis.find("name", "YES");
    let no = message.guild.emojis.find("name", "NO");
    poll = "**New Poll**:\n:scales: " + poll;
    if (poll[poll.length-1] != "?") poll += "?";
    message.channel.send(poll)
        .then(function (message) {
            if (yes !== null && no !== null) {
                message.react(no);
                message.react(yes);
            }
            else {
                message.react("❎");
                message.react("✅");
            }
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
