
        //888888b.
        //888  "88b                           Adrian Hyc
        //888  .88P
        //8888888K.   8888b.  .d8888b  888  888 88888888  .d88b.
        //888  "Y88b     "88b 88K      888  888    d88P  d88""88b
        //888    888 .d888888 "Y8888b. 888  888   d88P   888  888
        //888   d88P 888  888      X88 Y88b 888  d88P    Y88..88P
/**     //8888888P"  "Y888888  88888P'  "Y88888 88888888  "Y88P"
 * 
 * This event happens when a user types a message in the server.
 */

const settings = require("../settings.json");
module.exports = message => {

    let channelType = message.channel.type;
    let string = message.content;
    let adminChat = null;

    /* Figures out if an admin_chat exists */
    if (channelType === "text") {
        var guildChannels = message.guild.channels;
        adminChat = guildChannels.find("name", "admin_chat");
    }

    /* If the message is a command then do it */
    if (string.startsWith(settings.prefix)) {
        try {
            var client = message.client;
            var command = string.split(' ')[0].slice(settings.prefix.length);
            var params = string.split(' ').slice(1);
            var perms = client.elevation(message);
            var cmd;

            /* Checks if command exists */
            if (client.commands.has(command)) {
                cmd = client.commands.get(command);
            }

            /* Checks if they used a command alias */
            else if (client.aliases.has(command)) {
                cmd = client.commands.get(client.aliases.get(command));
            }

            /* Checks if the user has the correct level to run it */
            if (cmd) {
                if (perms < cmd.conf.permLevel) {
                    return;
                }
                cmd.run(client, message, params, perms);
            }
        }

        /* Try Catch in case something goes wrong */
        catch (e) {
            console.log(e); /* Useful for testing */
            message.reply("That will throw an error so I can't let you do that. Lazy try catch programming ftw!");
        }
    }

    /* Checks if messages contain inapproperate words */
    else if (adminChat !== null) {
        var stamp = require('../timeStamp.js');
        var words = settings.bannedWords;
        let botTest = message.author.id;
        let newStr = string.toLowerCase();
        let found = false;

        if (words.some(word => newStr.includes(word))) {
            found = true;
        }

        /* Notifies the admins and deletes the message */
        if (botTest !== settings.botid && found === true) {
            message.delete();
            guildChannels.get(adminChat.id).send(`${stamp.time()} **${message.author}** wrote in ` + message.channel + ':\n' + '" '+ string + ' "' + "\nᅠ");
            message.reply("nani the fuck!?\n" +
                "Your message has been **FLAGGED** and **DELETED** for containing a word that is not allowed on this server." +
                "\n\n :rotating_light: Your message has been recorded and sent to the moderators for review. :rotating_light:");
        }
    }

};
