const Discord = require('discord.js');
const settings = require('../settings.json');
exports.run = (client, message, args) => {
    let main = message.guild.channels.first();
    let reason = args.slice(1).join(' ');
    let user = message.mentions.users.first();
    let permision = message.guild.member(client.user).hasPermission('VIEW_AUDIT_LOG');

    if (!permision) return message.reply("You don't have the permisions to execute the command.");
    if (reason.length < 1) return message.reply('You must supply a reason for the warning.');
    if (message.mentions.users.size < 1) return message.reply('You must mention someone to give them a warning.');
    message.delete();

    main.send({embed: {
        color: 0xff0800,
        author: {
            name: "USER WARNING NOTICE ",
            icon_url: "https://cdn2.iconfinder.com/data/icons/toolbar-signs-2/512/attention_alert_warning_message-512.png"
        },
        description: `**${message.author.username}** has issued **${user.username}** a warning!`,
        fields: [{
            name: "Reason for the warning:",
            value: reason
        }],
        timestamp: new Date(),
        footer: {
            text: `BAKAAAAAAAAAAAAAAA!!!!!`
        }
    }});

    main.send(`~lock <@${user.id}> 2m`);
};

exports.conf = {
	enabled: true,
	guildOnly: false,
	aliases: [],
	permLevel: 0
};

exports.help = {
	name: "warn",
	description: "Give someone a warning",
	usage: "warn [user] [reason]"
};
