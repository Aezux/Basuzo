
        //888888b.
        //888  "88b                           Adrian Hyc
        //888  .88P
        //8888888K.   8888b.  .d8888b  888  888 88888888  .d88b.
        //888  "Y88b     "88b 88K      888  888    d88P  d88""88b
        //888    888 .d888888 "Y8888b. 888  888   d88P   888  888
        //888   d88P 888  888      X88 Y88b 888  d88P    Y88..88P
/**     //8888888P"  "Y888888  88888P'  "Y88888 88888888  "Y88P"
 * 
 * This command updates the database.
 */

const database = require("../database.js");
exports.run = (client, message) => {

    /* Updates the database with information from the server */
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
