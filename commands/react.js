const settings = require('../settings.json');
exports.run = (client, message, args) => {
    var Volt = message.client.guilds.find("name", "Volt");
    let type = args.slice(1).join(' ').toLowerCase();
    let user = message.mentions.users.first();
    let UserMsg = user.lastMessage;
    var found = true;

    var emote;
    if (type === "gold") {
        emote = Volt.emojis.find("name", "Gold");
    } else if (type === "up") {
        emote = Volt.emojis.find("name", "Updoot");
    } else if (type === "down") {
        emote = Volt.emojis.find("name", "Downvote");
    } else if (type === "clap") {
        emote = Volt.emojis.find("name", "EZCLAP");
    } else {
        found = false;
    }

    if (found) {
        UserMsg.react(`${emote.id}`);
    }

    message.delete();

}

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
};

exports.help = {
    name: "react",
    description: "react to a post",
    usage: "react [emote]"
};