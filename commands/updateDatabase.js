const database = require('../database.js');
exports.run = (client, message) => {
    var guildArray = client.guilds.array();
    for (var i=0; i<guildArray.length; ++i) {
        var name = guildArray[i].name;
        database.create(name);
        database.populate(guildArray[i].members.array(), name);
    }
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
