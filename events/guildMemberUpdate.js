const stamp = require('../timeStamp.js');
module.exports = (oldMember, newMember) => {
    let newUser = newMember.nickname;
    let oldUser = oldMember.nickname;
    let audit = newMember.guild.channels.find("name", "audit-log");
    if (oldUser !== newUser && audit !== null) {
        if (oldUser === null) newMember.guild.channels.get(audit.id).send(`:gear: ${stamp.time()} ` + "**" + newUser + "** gave themselves a nickname.");
        else if (newUser === null) newMember.guild.channels.get(audit.id).send(`:gear: ${stamp.time()} ` + "**" + oldUser + "** went back to using their Discord username.");
        else newMember.guild.channels.get(audit.id).send(`:gear: ${stamp.time()} ` + "**" + oldUser + "** changed their nickname to: **" + newUser + "**.");
    }
};
