const stamp = require('../timeStamp.js');
const database = require('../database.js');
module.exports = member => {
    let guild = member.guild;
    var main = guild.channels.find("name", "general");
    let welcome = guild.channels.find("name", "welcome");
    let audit = guild.channels.find("name", "audit-log");
    let squad = guild.roles.find("name", "⚡ SQUAD");
    
    database.newUser(member, guild.name);
    database.getRoles(member, guild);

    if (welcome !== null && main !== null) {
        main.send(`:small_blue_diamond: Lets all welcome **${member.user.username}** to ${guild.name}!` + " Please check out " + "<#" + welcome.id + ">" + " for information about the channel.");
    }
    else if (main !== null) main.send(`:small_blue_diamond: Lets all welcome **${member.user.username}** to ${guild.name}!`);
    if (squad !== null) member.addRole(squad);
    if (audit !== null) guild.channels.get(audit.id).send(`:cyclone: ${stamp.time()} **${member.user.username}** has joined ${guild.name}.`);
};
