exports.run = (client, message) => {
    let rng = Math.floor(Math.random() * 2);
    if (rng === 0) message.channel.send("", {
        file: "./images/Heads.png"
    });
    else{
        message.channel.send("", {
            file: "./images/Tails.png"
        });
    }
}
exports.conf = {
	enabled: true,
	guildOnly: false,
	aliases: [],
	permLevel: 0
};

exports.help = {
	name: "flip",
	description: "Flips a coin",
	usage: "flip"
};
