
        //888888b.
        //888  "88b                           Adrian Hyc
        //888  .88P
        //8888888K.   8888b.  .d8888b  888  888 88888888  .d88b.
        //888  "Y88b     "88b 88K      888  888    d88P  d88""88b
        //888    888 .d888888 "Y8888b. 888  888   d88P   888  888
        //888   d88P 888  888      X88 Y88b 888  d88P    Y88..88P
/**     //8888888P"  "Y888888  88888P'  "Y88888 88888888  "Y88P"
 * 
 * This event happens when the bot gets invited to a server.
 */

const settings = require("../settings.json");
const stamp = require("../timeStamp.js");
const database = require("../database.js");
module.exports = guild => {

    /* Finds the guild main channel and audit-log */
    var audit = guild.channels.find("name", "audit-log");
    var main = guild.channels.first();

    var hello = "╔┓┏╦━━╦┓╔┓╔━━╗╔╗\n║┗┛║┗━╣┃║┃║╯╰║║║\n║┏┓║┏━╣┗╣┗╣╰╯║╠╣\n╚┛┗╩━━╩━╩━╩━━╝╚╝﻿\n";
    main.send(hello + `:wave: Hello ${guild.name}!`+ " To see a list of my commands type **" + settings.prefix + "help**");

    /* Creates the audit-log if it can't find one */
    if (audit === null) {
        guild.createChannel("audit-log", "text")
        .then(() => {
            audit = guild.channels.find("name", "audit-log");
            guild.channels.get(audit.id).send(`:trident: ${stamp.time()} **A public audit log has been created**.`);
        })
    }

    /* Uses the already exiting one */
    else {
        guild.channels.get(audit.id).send(`:trident: ${stamp.time()} **All server changes will be logged here**.`);
    }

    /* Adds the guild to the database and populates the tables */
    database.create(guild.name);
    database.populate(guild.members.array(), guild.name);

};
