const ms = require('ms');
exports.run = (client, message, args) => {
if (!client.lockit) client.lockit = [];
    let time = args.join(' ');
    let validUnlocks = ['release', 'unlock'];
    if (!message.guild.member(client.user).hasPermission('MANAGE_CHANNELS')) return message.reply("You don't have the permisions to execute the command.");
    if (!time) return message.reply('You must set a duration for the lockdown in either hours, minutes or seconds');

    if (validUnlocks.includes(time)) {
    message.channel.overwritePermissions(message.guild.id, {
        SEND_MESSAGES: null
        }).then(() => {
            message.channel.send('Lockdown lifted.');
            clearTimeout(client.lockit[message.channel.id]);
            delete client.lockit[message.channel.id];
    }).catch(error => {
        console.log(error);
    });
    } else {
        message.channel.overwritePermissions(message.guild.id, {
            SEND_MESSAGES: false
        }).then(() => {
            message.channel.send(`Channel locked down for ${ms(ms(time), { long: true })}`).then(() => {

            client.lockit[message.channel.id] = setTimeout(() => {
                message.channel.overwritePermissions(message.guild.id, {
                    SEND_MESSAGES: null
                }).then(message.channel.send('Lockdown lifted.')).catch(console.error);
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
