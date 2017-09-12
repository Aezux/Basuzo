const stamp = require('../timeStamp.js');
module.exports = (oldMember, newMember) => {
    let audit = newMember.guild.channels.find("name", "audit-log");
    if (audit !== null) {
        let newUserChannel = newMember.voiceChannel;
        let oldUserChannel = oldMember.voiceChannel;
        if(oldUserChannel === undefined && newUserChannel !== undefined) {
            if (!newMember.user.bot) newMember.guild.channels.get(audit.id).send(`:loud_sound: ${stamp.time()} **${newMember.user.username}** joined a voice channel.\n`);
        }
        else if(newUserChannel === undefined) {
            if (!newMember.user.bot) newMember.guild.channels.get(audit.id).send(`:mute: ${stamp.time()} **${newMember.user.username}** is no longer in any voice channels.\n`);
        }
    }
}
