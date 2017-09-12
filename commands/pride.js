const ms = require('ms');
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
exports.run = (client, message, args) => {
    let role = message.mentions.roles.first();
    if (!message.guild.member(client.user).hasPermission('MANAGE_ROLES')) return message.reply("You don't have the permisions to execute the command.");
    if (role === undefined) return message.reply("You need to mention a valid role");
    message.delete();
    let Color = role.color;
    var Colors = [0xff0800,0xF68A21,0xecf284,0xb2ec5d,0x1fcecb,0x9932cc,0xff43a4];
    for (i=0; i<60; i++) {
        for (j=0; j<Colors.length; j++) {
            role.setColor(Colors[j]);
            sleep(1000);
        }
    }
    role.setColor(Color);
};

exports.conf = {
	enabled: true,
	guildOnly: false,
	aliases: [],
	permLevel: 0
};

exports.help = {
	name: "pride",
	description: "Role pride",
	usage: "pride [role]"
};
