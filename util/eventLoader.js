const reqEvent = (event) => require(`../events/${event}`)
module.exports = client => {
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
