
        //888888b.
        //888  "88b                           Adrian Hyc
        //888  .88P
        //8888888K.   8888b.  .d8888b  888  888 88888888  .d88b.
        //888  "Y88b     "88b 88K      888  888    d88P  d88""88b
        //888    888 .d888888 "Y8888b. 888  888   d88P   888  888
        //888   d88P 888  888      X88 Y88b 888  d88P    Y88..88P
/**     //8888888P"  "Y888888  88888P'  "Y88888 88888888  "Y88P"
 * 
 * This command gets culture results.
 */

const randomPuppy = require("random-puppy");
const cultures = require("../cultures.js");
const settings = require("../settings.json");
exports.run = (client, message, args) => {

    /* Gets the user input */
    var type = args.join(" ").toLowerCase();
    if (type === "") {
        return message.reply(`No culture specified.\n**Usage:** ${settings.prefix}culture [culture type]`);
    }

    /* Creates the culture object */
    var obj = cultures(type);
    var Name = obj.name;
    var Color = obj.color;

    /* Exits out if the culture doesn't exist */
    if (Name === null) {
        return message.reply("That culture doesn't seem to exist in the database...\n Check the spelling or ask to have it created.");
    }
    
    /* Sends the culture result to the channel */
    const event = randomPuppy.all(name);
    event.once('data', url => message.channel.send({
            embed: {
                color: Color,
                image: {url: url}
            }}
        )
    );

}

exports.conf = {
	enabled: true,
	guildOnly: false,
	aliases: ["culture", "CULTURE"],
	permLevel: 0
};

exports.help = {
	name: "culture",
	description: "diffrent cultures",
	usage: "Culture [culture type]"
};
