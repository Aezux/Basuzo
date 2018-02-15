
        //888888b.
        //888  "88b                           Adrian Hyc
        //888  .88P
        //8888888K.   8888b.  .d8888b  888  888 88888888  .d88b.
        //888  "Y88b     "88b 88K      888  888    d88P  d88""88b
        //888    888 .d888888 "Y8888b. 888  888   d88P   888  888
        //888   d88P 888  888      X88 Y88b 888  d88P    Y88..88P
/**     //8888888P"  "Y888888  88888P'  "Y88888 88888888  "Y88P"
 * 
 * This command flips a coin.
 */

const random = require("../rng.js");
exports.run = (client, message) => {

    var rng = random.rng(0, 1);
    var image;

    /* Gets either a heads or tails image */
    if (rng == 0) {
        image = "./images/Heads.png";
    } else {
        image = "./images/Tails.png";
    }

    /* Sends the picture to the channel */
    message.channel.send("", {
        file: image
    });

}

exports.conf = {
	enabled: true,
	guildOnly: false,
	aliases: [],
	permLevel: 0
};

exports.help = {
	name: "coin",
	description: "Flips a coin",
	usage: "coin"
};
