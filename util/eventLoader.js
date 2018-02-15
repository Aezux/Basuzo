
        //888888b.
        //888  "88b                           Adrian Hyc
        //888  .88P
        //8888888K.   8888b.  .d8888b  888  888 88888888  .d88b.
        //888  "Y88b     "88b 88K      888  888    d88P  d88""88b
        //888    888 .d888888 "Y8888b. 888  888   d88P   888  888
        //888   d88P 888  888      X88 Y88b 888  d88P    Y88..88P
/**     //8888888P"  "Y888888  88888P'  "Y88888 88888888  "Y88P"
 * 
 * This function launches all the events. 
 */

const reqEvent = (event) => require(`../events/${event}`)
module.exports = client => {

    /* All the events that the bot does */
    client.on('disconnect', () => reqEvent('disconnect')(client));
    client.on('guildCreate', reqEvent('guildCreate'));
    client.on('guildDelete', reqEvent('guildDelete'));
    client.on('guildMemberAdd', reqEvent('guildMemberAdd'));
    client.on('guildMemberRemove', reqEvent('guildMemberRemove'));
    client.on('guildMemberUpdate', reqEvent('guildMemberUpdate'));
    client.on('message', reqEvent('message'));
    client.on('messageDelete', reqEvent('messageDelete'));
    client.on('ready', () => reqEvent('ready')(client));
    client.on('reconnecting', () => reqEvent('reconnecting')(client));
    client.on('voiceStateUpdate', reqEvent('voiceStateUpdate'));

};
