
        //888888b.
        //888  "88b                           Adrian Hyc
        //888  .88P
        //8888888K.   8888b.  .d8888b  888  888 88888888  .d88b.
        //888  "Y88b     "88b 88K      888  888    d88P  d88""88b
        //888    888 .d888888 "Y8888b. 888  888   d88P   888  888
        //888   d88P 888  888      X88 Y88b 888  d88P    Y88..88P
/**     //8888888P"  "Y888888  88888P'  "Y88888 88888888  "Y88P"
 * 
 * This event happens when a user deletes a message from the server.
 */

const settings = require("../settings.json");
const stamp = require("../timeStamp.js");
module.exports = message => {

    /* Finds the audit-log */
    let content = message.cleanContent;
    let audit = message.guild.channels.find("name", "audit-log");
    
    /* Gets the contents of the deleted message */
    if (content.startsWith(settings.prefix) || audit === null) {
        return;
    }

    /* Reports the deleted message */
    if (!message.author.bot) {
        if (content === "") {
            message.client.channels.get(audit.id).send(`:speech_balloon: ${stamp.time()} **${message.author.username}\'s** post just got deleted from ${message.channel}`);
        } else {
            message.client.channels.get(audit.id).send(`:speech_balloon: ${stamp.time()} **${message.author.username}'s** message: \"*` + content + `*\" was deleted from ${message.channel}`);
        }
    }
};
