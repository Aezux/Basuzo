exports.run = (client, message, args) => {
	let command;
	if (client.commands.has(args[0])) command = args[0];
	else if (client.aliases.has(args[0])) command = client.aliases.get(args[0]);
	if (!command) return message.channel.send(`I cannot find the command: ${args[0]}`);
	else {
		message.channel.sendMessage(`Reloading: ${command}`)
		.then(message => {
			client.reload(command)
			.then(() => {
				message.edit(`Successfully reloaded: ${command}`);
			})
			.catch(e => {
				message.edit(`Command reload failed: ${command}\n\`\`\`${e.stack}\`\`\``);
			});
		});
	}
};

exports.conf = {
	enabled: true,
	guildOnly: false,
	aliases: [],
	permLevel: 1
};

exports.help = {
	name: "reload",
	description: "Reloads a command",
	usage: "reload [command]"
};
