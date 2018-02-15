
        //888888b.
        //888  "88b                           Adrian Hyc
        //888  .88P
        //8888888K.   8888b.  .d8888b  888  888 88888888  .d88b.
        //888  "Y88b     "88b 88K      888  888    d88P  d88""88b
        //888    888 .d888888 "Y8888b. 888  888   d88P   888  888
        //888   d88P 888  888      X88 Y88b 888  d88P    Y88..88P
/**     //8888888P"  "Y888888  88888P'  "Y88888 88888888  "Y88P"
 * 
 * This event happens when someone leaves the server.
 */

const stamp = require("../timeStamp.js");
const settings = require("../settings.json");
module.exports = member => {

    /* Doesn't display any messages for bots */
    if (member.user.bot) {
        return;
    }

    /* Finds all the channels */
    let guild = member.guild;
    var main = guild.channels.find("name", "general");
    let audit = guild.channels.find("name", "audit-log");

    /* Finds the users nickname or username */
    var nickname = member.nickname;
    if (nickname === null) {
        nickname = member.user.username;
    }

    /* Sends the messages */
    if(main !== null) {
        main.send(`**${nickname}** is no longer part of this server.`)
        .then(() => {
            let botMsg = guild.members.find('id', settings.botid).lastMessage;
            botMsg.react("🇫");
        })
    } if (audit !== null)  {
        guild.channels.get(audit.id).send(`:skull: ${stamp.time()} **${member.user.username}** has left ${guild.name}.`);
    }

};
