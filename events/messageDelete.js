const settings = require('../settings.json');
const stamp = require('../timeStamp.js');
module.exports = message => {
    let content = message.cleanContent;
    let audit = message.guild.channels.find("name", "audit-log");
    if (content.startsWith(settings.prefix) || audit === null) return;
    if (!message.author.bot) {
        if (content === "") message.client.channels.get(audit.id).send(`:speech_balloon: ${stamp.time()} **${message.author.username}\'s** post just got deleted from ${message.channel}`);
        else message.client.channels.get(audit.id).send(`:speech_balloon: ${stamp.time()} **${message.author.username}'s** message: \"*` + content + `*\" was deleted from ${message.channel}`);
    }
};
