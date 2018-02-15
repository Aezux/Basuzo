
        //888888b.
        //888  "88b                           Adrian Hyc
        //888  .88P
        //8888888K.   8888b.  .d8888b  888  888 88888888  .d88b.
        //888  "Y88b     "88b 88K      888  888    d88P  d88""88b
        //888    888 .d888888 "Y8888b. 888  888   d88P   888  888
        //888   d88P 888  888      X88 Y88b 888  d88P    Y88..88P
/**     //8888888P"  "Y888888  88888P'  "Y88888 88888888  "Y88P"
 * 
 * This command displays all the commands to the users.
 */

const settings = require("../settings.json");
exports.run = (client, message, args) => {

    message.delete();
    var Color = 0xFFFFFF;
    var Content = "";

    /* The user asks for the list of commands */
    if (!args[0]) {
        const commandNames = Array.from(client.commands.keys());
        const longest = commandNames.reduce((long, str) => Math.max(long, str.length), 0);
        var line = ":::::::::::::::::::::::::::::::::::::::::::::::";
        Content = "\`\`\`asciidoc\n" + "    = THIS IS A LIST OF ALL THE COMMANDS =\n" + line + `\n${client.commands.map(c => `${" ".repeat(longest - c.help.name.length)}${c.help.name} :: ${c.help.description}`).join("\n")}\n` + line + `\n  Use ${settings.prefix}help [command] to learn more about it.\n` + "\`\`\`";
        Color = 0xF5845E;
    }
    
    /* The user wants specific information about a command */
    else {
        var command = args[0];
        if (client.commands.has(command)) {
            command = client.commands.get(command);
            Content = "\`\`\`asciidoc\n" + `= ${command.help.name} = \nDescription: ${command.help.description}\nUsage: type ${settings.prefix}${command.help.usage} in a text channel.` + "\`\`\`";
            Color = 0x5A6772;
        }
    }

    /* Sends the request result back to user */
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
