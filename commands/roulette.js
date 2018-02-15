
        //888888b.
        //888  "88b                           Adrian Hyc
        //888  .88P
        //8888888K.   8888b.  .d8888b  888  888 88888888  .d88b.
        //888  "Y88b     "88b 88K      888  888    d88P  d88""88b
        //888    888 .d888888 "Y8888b. 888  888   d88P   888  888
        //888   d88P 888  888      X88 Y88b 888  d88P    Y88..88P
/**     //8888888P"  "Y888888  88888P'  "Y88888 88888888  "Y88P"
 * 
 * This command allows you to play server roulette.
 */

const random = require("../rng.js");
const settings = require("../settings.json");
exports.run = (client, message) => {

    var kicked = false;
    var rng = random.rng(0, 6);

    /* The user loses the game of roulette and gets kicked */
    if (rng == 0) {
        kicked = true;
        var main = message.guild.channels.find("name", "general");

        /* Sends message to the main channel */
        if (main !== null) {
            main.send(`${message.author}` + " has lost the roulette game")
            .then(() => {
                let botMsg = message.guild.members.find('id', settings.botid).lastMessage;
                botMsg.react("🇫");
            })
        }

        /* Kicks the user */
        message.guild.members.find('id', `${message.author.id}`).kick("BAKA! That's what you get for playing roulette.");
    }

    /* The user is safe */
    else {
        message.reply("Safe for now.")
        .then(() => {
            let botMsg = message.guild.members.find("id", settings.botid).lastMessage;
            var emote = message.client.guilds.find("name", "Volt").emojis.find("name", "Dab");
            botMsg.react(`${emote.id}`);
        })
    }
    
    /* If the user is kicked then send them an invite */
    if (kicked) {
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
