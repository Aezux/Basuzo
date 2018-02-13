const database = require('../database.js');
exports.run = (client, message) => {
    database.populate(message.guild.members.array(), message.guild.name);
}

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 1
};

exports.help = {
    name: "updateDatabase",
    description: "Updates all databases",
    usage: "updateDatabase"
};
