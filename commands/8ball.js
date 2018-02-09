const random = require('../rng.js');
exports.run = (client, message, args) => {
    let question = args.join(" ");
    if (!question) return message.reply("I mean I can shake this 8ball all I want but without a question it's kinda dumb.")
    var answers = [
        "Signs point to yes.",
        "Yes.",
        "Reply hazy, try again.",
        "Without a doubt.",
        "My sources say no.",
        "As I see it, yes.",
        "You may rely on it.",
        "Concentrate and ask again.",
        "Outlook not so good.",
        "It is decidedly so.",
        "Better not tell you now.",
        "Very doubtful.",
        "Yes - definitely.",
        "It is certain.",
        "Cannot predict now.",
        "Most likely.",
        "Ask again later.",
        "My reply is no.",
        "Outlook good.",
        "Don't count on it.",
        "Who cares?",
        "Never, ever, ever.",
        "Possibly.",
        "There is a small chance."
    ]
    var rng = random.rng(0, answers.length-1);
    var answer = answers[rng];
    message.channel.send("🎱 The Magic 8 Ball says: **" + answer + "** 🎱")
};

exports.conf = {
	enabled: true,
	guildOnly: false,
	aliases: [],
	permLevel: 0
};

exports.help = {
	name: "8ball",
	description: "Ask the 8ball",
	usage: "8ball"
};
