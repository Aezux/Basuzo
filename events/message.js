const settings = require('../settings.json');
module.exports = message => {
    let channelType = message.channel.type;
    let string = message.content;
    let adminChat = null;

    if (channelType === "text") {
        var guildChannels = message.guild.channels;
        adminChat = guildChannels.find("name", "admin_chat");
    }

    if (string.startsWith(settings.prefix)) {
        try {
            let client = message.client;
            let command = string.split(' ')[0].slice(settings.prefix.length);
            let params = string.split(' ').slice(1);
            let perms = client.elevation(message);
            let cmd;

            if (client.commands.has(command)) {
                cmd = client.commands.get(command);
            }
            else if (client.aliases.has(command)) {
                cmd = client.commands.get(client.aliases.get(command));
            }
            if (cmd) {
                if (perms < cmd.conf.permLevel) return;
                cmd.run(client, message, params, perms);
            }
        }
        catch (e) {
            console.log(e); /* Useful for testing */
            message.reply("That will throw an error so I can't let you do that. Lazy try catch programming ftw!");
        }
    }

    else if (adminChat !== null) {
        var stamp = require('../timeStamp.js');
        var words = settings.bannedWords;
        let botTest = message.author.id;
        let newStr = string.toLowerCase();
        let found = false;

        if (words.some(word => newStr.includes(word))) {
            found = true;
        }

        if (botTest !== settings.botid && found === true) {
            message.delete();
            guildChannels.get(adminChat.id).send(`${stamp.time()} **${message.author}** wrote in ` + message.channel + ':\n' + '" '+ string + ' "' + "\nᅠ");
            message.reply("nani the fuck!?\n" +
                "Your message has been **FLAGGED** and **DELETED** for containing a word that is not allowed on this server." +
                "\n\n :rotating_light: Your message has been recorded and sent to the moderators for review. :rotating_light:");
        }
    }
};
