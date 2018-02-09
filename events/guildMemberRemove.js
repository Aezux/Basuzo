const stamp = require('../timeStamp.js');
const settings = require('../settings.json');
module.exports = member => {
    if (member.id === settings.botid) return;
    let guild = member.guild;
    let main = guild.channels.first();
    let audit = guild.channels.find("name", "audit-log");
    main.send(`**${member.user}** is no longer part of this server.` + " Type **" + settings.prefix + "f** to pay respects.")
    .then(() => {
        let botMsg = guild.members.find('id', settings.botid).lastMessage;
        botMsg.react("🇫");
    })
    if (audit !== null) guild.channels.get(audit.id).send(`:skull: ${stamp.time()} **${member.user.username}** has left ${guild.name}.`);
};