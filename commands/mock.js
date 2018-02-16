
        //888888b.
        //888  "88b                           Adrian Hyc
        //888  .88P
        //8888888K.   8888b.  .d8888b  888  888 88888888  .d88b.
        //888  "Y88b     "88b 88K      888  888    d88P  d88""88b
        //888    888 .d888888 "Y8888b. 888  888   d88P   888  888
        //888   d88P 888  888      X88 Y88b 888  d88P    Y88..88P
/**     //8888888P"  "Y888888  88888P'  "Y88888 88888888  "Y88P"
 * 
 * This command mocks another user.
 */

const random = require("../rng.js");
exports.run = (client, message) => {

    /* Checks if the message sender is mocking themselves */
    var user = message.mentions.users.first();
    if(message.author.id === user.id) {
        return message.reply("Why are you trying to mock yourself?");
    }

    /* Gets the last message and converts it to lower case */
    var string = user.lastMessage.cleanContent.toLowerCase().split("");

    /* Go through the string array and change letters to uppercase randomly */
    for (var i = 0; i < string.length; ++i) {
        var rng = random.rng(0, 1);
        if (rng === 0) {
            string[i] = string[i].toUpperCase();
        }
    }
    
    /* Combine the array into a string */
    var newWord = string.join("");

    /* Returns the final string result */
    message.channel.send(newWord);
}

exports.conf = {
	enabled: true,
	guildOnly: false,
	aliases: [],
	permLevel: 0
};

exports.help = {
	name: "mock",
	description: "MoCK tHE LaSt PoSt",
	usage: "mock [user]"
};
