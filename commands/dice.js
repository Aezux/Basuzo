var d20 = require('d20');
exports.run = (client, message, args) => {
    diceRoll = args.join(" ");
    var numCheck = diceRoll[0].charCodeAt();
    console.log(numCheck);
    if (!diceRoll) return message.reply("You need to provide the dice information.");
    else if (numCheck === 32) return message.reply("You can't start with a [space].");
    else if ((numCheck < 48 || numCheck > 57)) return message.reply("Not valid dice.");
    else message.channel.send(`${message.author.username} rolls: ` + d20.roll(diceRoll));
}

exports.conf = {
	enabled: true,
	guildOnly: false,
	aliases: [],
	permLevel: 0
};

exports.help = {
	name: "dice",
	description: "Roll d20 dice",
	usage: "dice [amount of dice][dice sides] +- [modifier]"
};
