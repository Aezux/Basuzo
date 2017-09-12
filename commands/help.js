const settings = require('../settings.json');
exports.run = (client, message, args) => {
    message.delete();
    var Color = 0xFFFFFF;
    var Content = "";
    if (!args[0]) {
        const commandNames = Array.from(client.commands.keys());
        const longest = commandNames.reduce((long, str) => Math.max(long, str.length), 0);
        let line = ":::::::::::::::::::::::::::::::::::::::::::::::";
        Content = "\`\`\`asciidoc\n" + "    = THIS IS A LIST OF ALL THE COMMANDS =\n" + line + `\n${client.commands.map(c => `${' '.repeat(longest - c.help.name.length)}${c.help.name} :: ${c.help.description}`).join('\n')}\n` + line + `\n  Use ${settings.prefix}help [command] to learn more about it.\n` + "\`\`\`";
        Color = 0xCB4B16;
    }
    else {
        let command = args[0];
        if (client.commands.has(command)) {
            command = client.commands.get(command);
            Content = "\`\`\`asciidoc\n" + `= ${command.help.name} = \nDescription: ${command.help.description}\nUsage: type ${settings.prefix}${command.help.usage} in a text channel.` + "\`\`\`";
            Color = 0x268BD2;
        }
    }
    message.author.send({ embed: {
            color: Color,
            description: Content
        }
    });
};

exports.conf = {
	enabled: true,
	guildOnly: false,
	aliases: [],
	permLevel: 0
};

exports.help = {
	name: "help",
	description: "Displays commands for your permission level",
	usage: "help [command](optional)"
};
