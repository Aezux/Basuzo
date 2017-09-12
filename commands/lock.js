const Discord = require('discord.js');
const ms = require('ms');
exports.run = (client, message, args) => {
    if (!client.lockit) client.lockit = [];
    let main = message.guild.channels.first();
    let time = args.slice(1).join(' ');
    let user = message.mentions.users.first();
    let validUnlocks = ["unlock"];
    let banRole = client.guilds.get(message.guild.id).roles.find("name", "Locked");
    let roles = message.guild.member(user).roles;
    var rolesArray = Array.from(roles.values());

    if (!message.guild.member(client.user).hasPermission('MANAGE_ROLES')) return message.reply("You don't have the permisions to execute the command.");
    if (banRole === null) return message.reply("You need to have a role called: \"**Locked**\" for this to work.");
    if (message.mentions.users.size < 1) return message.reply("You must mention someone to lock/unlock them.");
    if (!time) return message.reply("You must set a duration for the lockdown in either hours, minutes or seconds.");

    message.delete();

    if (validUnlocks.includes(time)) {
        main.send(`${message.author.username} has lifted the lock on ${user.username}.`);
        clearTimeout(client.lockit[message.channel.id]);
        delete client.lockit[message.channel.id];
        message.guild.member(user).removeRole(banRole);
        for (i=1; i<rolesArray.length; i++) {
            message.guild.member(user).addRole(rolesArray[i]);
        }
    }
    else {
        message.guild.member(user).addRole(banRole);
        for (i=1; i<rolesArray.length; i++) {
            message.guild.member(user).removeRole(rolesArray[i]);
        }
        main.send(`User ${user.username} has been locked for ${ms(ms(time), { long:true })}`).then(() => {
            client.lockit[message.channel.id] = setTimeout(() => {
                message.guild.member(user).removeRole(banRole);
                for (i=1; i<rolesArray.length; i++) {
                    message.guild.member(user).addRole(rolesArray[i]);
                }
                main.send(`${user.username}\'s lockdown has been lifted, the ${ms(ms(time), { long:true })} has expired.`);
                delete client.lockit[message.channel.id];
            }, ms(time));
        })
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
	description: "Disables all permisions for the user",
	usage: "lock [user] [time]"
};
