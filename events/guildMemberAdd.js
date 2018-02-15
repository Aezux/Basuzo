
        //888888b.
        //888  "88b                           Adrian Hyc
        //888  .88P
        //8888888K.   8888b.  .d8888b  888  888 88888888  .d88b.
        //888  "Y88b     "88b 88K      888  888    d88P  d88""88b
        //888    888 .d888888 "Y8888b. 888  888   d88P   888  888
        //888   d88P 888  888      X88 Y88b 888  d88P    Y88..88P
/**     //8888888P"  "Y888888  88888P'  "Y88888 88888888  "Y88P"
 * 
 * This event happens when someone joins the server.
 */

const stamp = require("../timeStamp.js");
const database = require("../database.js");
module.exports = member => {

    /* Doesn't display any messages for bots */
    if (member.user.bot) {
        return;
    }

    /* Finds all the nessesary channels */
    let guild = member.guild;
    var main = guild.channels.find("name", "general");
    let welcome = guild.channels.find("name", "welcome");
    let audit = guild.channels.find("name", "audit-log");
    let squad = guild.roles.find("name", "⚡ SQUAD");
    
    /* Adds the new member to the database or gives them back their roles */
    database.newUser(member, guild.name);
    database.getRoles(member, guild);

    /* Welcomes the user to the server */
    if (welcome !== null && main !== null) {
        main.send(`:small_blue_diamond: Lets all welcome **${member.user.username}** to ${guild.name}!` + " Please check out " + "<#" + welcome.id + ">" + " for information about the channel.");
    } else if (main !== null) {
        main.send(`:small_blue_diamond: Lets all welcome **${member.user.username}** to ${guild.name}!`);
    } if (squad !== null) {
        member.addRole(squad);
    } if (audit !== null) {
        guild.channels.get(audit.id).send(`:cyclone: ${stamp.time()} **${member.user.username}** has joined ${guild.name}.`);
    }

};
