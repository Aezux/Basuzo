const settings = require("../settings.json");
const stamp = require('../timeStamp.js');
const database = require('../database.js');
module.exports = guild => {
    let audit = guild.channels.find("name", "audit-log");
    let main = guild.channels.first();
    let hello = "╔┓┏╦━━╦┓╔┓╔━━╗╔╗\n║┗┛║┗━╣┃║┃║╯╰║║║\n║┏┓║┏━╣┗╣┗╣╰╯║╠╣\n╚┛┗╩━━╩━╩━╩━━╝╚╝﻿\n";
    main.send(hello + `:wave: Hello ${guild.name}!`+ " To see a list of my commands type **" + settings.prefix + "help**");
    if (audit === null) {
        guild.createChannel("audit-log", "text")
        .then(() => {
            audit = guild.channels.find("name", "audit-log");
            guild.channels.get(audit.id).send(`:trident: ${stamp.time()} **A public audit log has been created**.`);
        })
    }
    else guild.channels.get(audit.id).send(`:trident: ${stamp.time()} **All server changes will be logged here**.`);

    database.create(guild.name);
    database.populate(guild.members.array(), guild.name);
};
