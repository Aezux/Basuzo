module.exports = (oldMember, newMember) => {
    let newUser = newMember.nickname;
    let oldUser = oldMember.nickname;

    let newRoles = newMember.roles.array();
    let oldRoles = oldMember.roles.array();

    if (newRoles.length != oldRoles.length) {
        var database = require('../database.js');  

        var roleString = "";
        for (var i = 1; i < newRoles.length; ++i) {
            roleString += newRoles[i].id;
            if (i < newRoles.length - 1) {
                roleString += ",";
            }
        }

        database.update(roleString, newMember.id, newMember.guild.name);
    }

    let audit = newMember.guild.channels.find("name", "audit-log");
    if (oldUser !== newUser && audit !== null) {
        var stamp = require('../timeStamp.js');
        if (oldUser === null) newMember.guild.channels.get(audit.id).send(`:gear: ${stamp.time()} ` + "**" + newUser + "** gave themselves a nickname.");
        else if (newUser === null) newMember.guild.channels.get(audit.id).send(`:gear: ${stamp.time()} ` + "**" + oldUser + "** went back to using their Discord username.");
        else newMember.guild.channels.get(audit.id).send(`:gear: ${stamp.time()} ` + "**" + oldUser + "** changed their nickname to: **" + newUser + "**.");
    }
};
