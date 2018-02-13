const random = require('../rng.js');
const settings = require('../settings.json');
exports.run = (client, message) => {
    var kicked = false;
    var rng = random.rng(0, 6);
    if (rng == 0) {
        kicked = true;
        var main = message.guild.channels.find("name", "general");
        if (main !== null) {
            main.send(`${message.author}` + " has lost the roulette game")
            .then(() => {
                let botMsg = message.guild.members.find('id', settings.botid).lastMessage;
                botMsg.react("🇫");
            })
        }
        message.guild.members.find('id', `${message.author.id}`).kick("BAKA! That's what you get for playing roulette.");
    } else {
        message.reply("Safe for now.")
        .then(() => {
            let botMsg = message.guild.members.find('id', settings.botid).lastMessage;
            var emote = message.client.guilds.find("name", "Volt").emojis.find("name", "Dab");
            botMsg.react(`${emote.id}`);
        })

    } if (kicked) {
        message.channel.send("You lose.");
        main.createInvite()
            .then(invite => message.author.send(`${invite.url}`))
    }
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
};

exports.help = {
    name: "roulette",
    description: "Nothing good can come from this",
    usage: "roulette"
};
