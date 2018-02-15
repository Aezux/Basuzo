
        //888888b.
        //888  "88b                           Adrian Hyc
        //888  .88P
        //8888888K.   8888b.  .d8888b  888  888 88888888  .d88b.
        //888  "Y88b     "88b 88K      888  888    d88P  d88""88b
        //888    888 .d888888 "Y8888b. 888  888   d88P   888  888
        //888   d88P 888  888      X88 Y88b 888  d88P    Y88..88P
/**     //8888888P"  "Y888888  88888P'  "Y88888 88888888  "Y88P"
 * 
 * This event happens when a user update there nickname or gets a role change.
 */

module.exports = (oldMember, newMember) => {

    /* Gets the users nicknames */
    let newUser = newMember.nickname;
    let oldUser = oldMember.nickname;

    /* Gets the users roles */
    let newRoles = newMember.roles.array();
    let oldRoles = oldMember.roles.array();

    /* Update the database if the roles change */
    if (newRoles.length != oldRoles.length) {
        var database = require("../database.js");  

        /* Put all the roles into string format */
        var roleString = "";
        for (var i = 1; i < newRoles.length; ++i) {
            roleString += newRoles[i].id;
            if (i < newRoles.length - 1) {
                roleString += ",";
            }
        }

        /* Update the database */
        database.update(roleString, newMember.id, newMember.guild.name);
    }

    /* Update the audit-log */
    var audit = newMember.guild.channels.find("name", "audit-log");
    if (oldUser !== newUser && audit !== null) {
        var stamp = require('../timeStamp.js');
        if (oldUser === null) newMember.guild.channels.get(audit.id).send(`:gear: ${stamp.time()} ` + "**" + newUser + "** gave themselves a nickname.");
        else if (newUser === null) newMember.guild.channels.get(audit.id).send(`:gear: ${stamp.time()} ` + "**" + oldUser + "** went back to using their Discord username.");
        else newMember.guild.channels.get(audit.id).send(`:gear: ${stamp.time()} ` + "**" + oldUser + "** changed their nickname to: **" + newUser + "**.");
    }

};
