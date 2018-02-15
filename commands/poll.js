
        //888888b.
        //888  "88b                           Adrian Hyc
        //888  .88P
        //8888888K.   8888b.  .d8888b  888  888 88888888  .d88b.
        //888  "Y88b     "88b 88K      888  888    d88P  d88""88b
        //888    888 .d888888 "Y8888b. 888  888   d88P   888  888
        //888   d88P 888  888      X88 Y88b 888  d88P    Y88..88P
/**     //8888888P"  "Y888888  88888P'  "Y88888 88888888  "Y88P"
 * 
 * This command launches a poll.
 */

exports.run = (client, message, args) => {

    /* Gets the poll message */
    var poll = args.join(" ");
    if (!poll) {
        return message.channel.send("Nothing to poll.");
    }

    message.delete();

    /* Gets the YES and NO emotes */
    var Volt = message.client.guilds.find("name", "Volt");
    var yes = Volt.emojis.find("name", "YES");
    var no = Volt.emojis.find("name", "NO");

    /* Starts a new poll message and appends a question mark if one is missing */
    poll = "**New Poll**:\n:scales: " + poll;
    if (poll[poll.length-1] != "?") {
        poll += "?";
    }

    /* Sends the message then reacts to it */
    message.channel.send(poll)
    .then(function (message) {
        message.react(`${yes.id}`);
        message.react(`${no.id}`);
    })

}

exports.conf = {
	enabled: true,
	guildOnly: false,
	aliases: [],
	permLevel: 0
};

exports.help = {
	name: "poll",
	description: "Poll something",
	usage: "poll [question]"
};
