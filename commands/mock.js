const Discord = require("discord.js");

function setCharAt(str, index, chr) {
    if(index > str.length-1) return str;
    return str.substr(0,index) + chr + str.substr(index+1);
}

function randUpper(string) {
    var random = require("random-js")();
    string = string.toLowerCase();
    let size = string.length;
    for (i=0; i<size; i++) {
        let rng = random.integer(0, 1);
        if (rng === 0) string = setCharAt(string, i, string[i].toUpperCase());
    }
    return string;
}

exports.run = (client, message) => {
    let user = message.mentions.users.first();
    if(message.author.id === user.id) return message.reply("Why are you trying to mock yourself?");
    let userMessage = user.lastMessage.cleanContent;
    let mock = randUpper(userMessage);
    message.channel.send(mock);
}

exports.conf = {
	enabled: true,
	guildOnly: false,
	aliases: [],
	permLevel: 0
};

exports.help = {
	name: "mock",
	description: "MoCK tHE LaSt PoSt",
	usage: "mock [user]"
};
