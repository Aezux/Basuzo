exports.run = (client, message, args) => {
    let cmd = args.join(' ');
    if ("dnd" === cmd.toLowerCase()) {
        let Role1 = message.guild.roles.find("name", "DnD");
        let Role2 = message.guild.roles.find("name", "Draconic Honeybadgers");
        let role = "";
        if (Role1 !== null) role = Role1;
        if (Role2 !== null) role = Role2;
        message.channel.send(":game_die: Roll for initiative " + role + "\nYou've been summoned to play **Dungeons and Dragons**");
    }
    else if ("league" === cmd.toLowerCase()) {
        let Role1 = message.guild.roles.find("name", "League");
        let Role2 = message.guild.roles.find("name", "League Honeybadgers");
        let role = "";
        if (Role1 !== null) role = Role1;
        if (Role2 !== null) role = Role2;
        message.channel.send(":trophy: Come try your luck, if you think you're in my league " + role + "\nYou've been summoned to play **League of Legends**");
    }
    else if ("overwatch" === cmd.toLowerCase()) {
        let Role1 = message.guild.roles.find("name", "Overwatch");
        let Role2 = message.guild.roles.find("name", "Overwatch Honeybadgers");
        let role = "";
        if (Role1 !== null) role = Role1;
        if (Role2 !== null) role = Role2;
        message.channel.send(":crossed_swords: Cheers love, the cavalry's here " + role + "\nYou've been summoned to play **Overwatch**");
    }
    else if ("strategy" === cmd.toLowerCase()) {
        let Role1 = message.guild.roles.find("name", "Strategy");
        let Role2 = message.guild.roles.find("name", "Strategy Honeybadgers");
        let role = "";
        if (Role1 !== null) role = Role1;
        if (Role2 !== null) role = Role2;
        message.channel.send(":white_flower: Comet sighted: The economy, fools! " + role + "\nYou've been summoned to play **Strategy Games**");
    }
    else {
        if (args != "") cmd = "**" + cmd + "** ";
        message.channel.send(`:bangbang:You are all invited to play ` + cmd + `with ${message.author}:bangbang:`);
    }
};

exports.conf = {
	enabled: true,
	guildOnly: false,
	aliases: [],
	permLevel: 0
};

exports.help = {
	name: "sum",
	description: "Alert everyone to play",
	usage: "sum [game]"
};
