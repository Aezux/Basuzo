
        //888888b.
        //888  "88b                           Adrian Hyc
        //888  .88P
        //8888888K.   8888b.  .d8888b  888  888 88888888  .d88b.
        //888  "Y88b     "88b 88K      888  888    d88P  d88""88b
        //888    888 .d888888 "Y8888b. 888  888   d88P   888  888
        //888   d88P 888  888      X88 Y88b 888  d88P    Y88..88P
/**     //8888888P"  "Y888888  88888P'  "Y88888 88888888  "Y88P"
 * 
 * This event happens when a user enters or leaves voice chat.
 */

const stamp = require("../timeStamp.js");
module.exports = (oldMember, newMember) => {

    /* Finds the audit-log */
    let audit = newMember.guild.channels.find("name", "audit-log");

    /* Updates who has entered and left the chat */
    if (audit !== null) {
        let newUserChannel = newMember.voiceChannel;
        let oldUserChannel = oldMember.voiceChannel;
        if(oldUserChannel === undefined && newUserChannel !== undefined) {
            if (!newMember.user.bot) {
                newMember.guild.channels.get(audit.id).send(`:loud_sound: ${stamp.time()} **${newMember.user.username}** joined a voice channel.\n`);
            }
        } else if(newUserChannel === undefined) {
            if (!newMember.user.bot) {
                newMember.guild.channels.get(audit.id).send(`:mute: ${stamp.time()} **${newMember.user.username}** is no longer in any voice channels.\n`);
            }
        }
    }

};
