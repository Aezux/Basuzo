
        //888888b.
        //888  "88b                           Adrian Hyc
        //888  .88P
        //8888888K.   8888b.  .d8888b  888  888 88888888  .d88b.
        //888  "Y88b     "88b 88K      888  888    d88P  d88""88b
        //888    888 .d888888 "Y8888b. 888  888   d88P   888  888
        //888   d88P 888  888      X88 Y88b 888  d88P    Y88..88P
/**     //8888888P"  "Y888888  88888P'  "Y88888 88888888  "Y88P"
 * 
 * This command locks down a channel.
 */

const ms = require("ms");
exports.run = (client, message, args) => {

    if (!client.lockit) {
        client.lockit = [];
    }
    
    var time = args.join(" ");
    var validUnlocks = ['release', 'unlock'];

    /* Check if the command can run */
    if (!message.guild.member(client.user).hasPermission('MANAGE_CHANNELS')) {
        return message.reply("You don't have the permisions to execute the command.");
    } if (!time) {
        return message.reply('You must set a duration for the lockdown in either hours, minutes or seconds');
    }

    /* Admin overwrites the lockdown */
    if (validUnlocks.includes(time)) {
        message.channel.overwritePermissions(message.guild.id, {
            SEND_MESSAGES: null
        }).then(() => {
            message.channel.send("Lockdown lifted.");
            clearTimeout(client.lockit[message.channel.id]);
            delete client.lockit[message.channel.id];
        }).catch(error => {
            console.log(error);
        });
    }
    
    /* Lock and unlock the channel */
    else {
        message.channel.overwritePermissions(message.guild.id, {
            SEND_MESSAGES: false
        }).then(() => {
            message.channel.send(`Channel locked down for ${ms(ms(time), { long: true })}`).then(() => {
            client.lockit[message.channel.id] = setTimeout(() => {
                message.channel.overwritePermissions(message.guild.id, {
                    SEND_MESSAGES: null
                }).then(message.channel.send("Lockdown lifted.")).catch(console.error);
                delete client.lockit[message.channel.id];
            }, ms(time));

            }).catch(error => {
                console.log(error);
            });
        });
    }
};

exports.conf = {
	enabled: true,
	guildOnly: false,
	aliases: [],
	permLevel: 0
};

exports.help = {
	name: "lock",
	description: "Users can't type in a channel",
	usage: "lock [time]"
};
