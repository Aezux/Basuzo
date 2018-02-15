
        //888888b.
        //888  "88b                           Adrian Hyc
        //888  .88P
        //8888888K.   8888b.  .d8888b  888  888 88888888  .d88b.
        //888  "Y88b     "88b 88K      888  888    d88P  d88""88b
        //888    888 .d888888 "Y8888b. 888  888   d88P   888  888
        //888   d88P 888  888      X88 Y88b 888  d88P    Y88..88P
/**     //8888888P"  "Y888888  88888P'  "Y88888 88888888  "Y88P"
 * 
 * This command allows the user to simulate shaking a 8-ball.
 */

const random = require("../rng.js");
exports.run = (client, message, args) => {

    /* Gets the question the user passes in */
    let question = args.join(" ");

    /* Exits out if no message was recieved */
    if (!question) 
        return message.reply("I mean I can shake this 8ball all I want but without a question it's kinda dumb.")

    /* Array that contains all the possible answers */
    var answers = [
        "Signs point to yes.",
        "Yes.",
        "Reply hazy, try again.",
        "Without a doubt.",
        "My sources say no.",
        "As I see it, yes.",
        "You may rely on it.",
        "Concentrate and ask again.",
        "Outlook not so good.",
        "It is decidedly so.",
        "Better not tell you now.",
        "Very doubtful.",
        "Yes - definitely.",
        "It is certain.",
        "Cannot predict now.",
        "Most likely.",
        "Ask again later.",
        "My reply is no.",
        "Outlook good.",
        "Don't count on it.",
        "Who cares?",
        "Never, ever, ever.",
        "Possibly.",
        "There is a small chance."
    ]

    /* Gets a random number from 0 to answers.length-1 */
    var rng = random.rng(0, answers.length-1);
    var answer = answers[rng];

    /* Returns the random answer from the array */
    message.channel.send("🎱 The Magic 8 Ball says: **" + answer + "** 🎱")

};

exports.conf = {
	enabled: true,
	guildOnly: false,
	aliases: [],
	permLevel: 0
};

exports.help = {
	name: "8ball",
	description: "Ask the 8ball",
	usage: "8ball"
};
