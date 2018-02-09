const random = require('../rng.js');
const randomPuppy = require('random-puppy');

var array;
var Color;

function getName() {
    let length = array.length;
    if (length === 0) return null;
    var rng = random.rng(0, length-1);
    return array[rng];
}

function setArray(cultureType) {
    if (cultureType === "adrian") {
        array = ["CleanLoli"];
        Color = 0xFECF71;
    } else if (cultureType === "beeve") {
        array = ["Rule34LoL", "Rule34Overwatch"];
        Color = 0x9966cc;
    } else if (cultureType === "cam") {
        array = ["gfur"];
        Color = 0x00fa9a;
    } else if (cultureType === "matt") {
        array = ["Saber"];
        Color = 0xff3800;
    } else if (cultureType === "nick") {
        array = ["animelegs", "ZettaiRyouiki", "awwnime", "thighdeology"];
        Color = 0xb2ec5d;
    } else if (cultureType === "shay") {
        array = ["Hideyoshi", "Astolfo"];
        Color = 0xe52b50;
    } else if (cultureType === "tyler") {
        array = ["surrealmemes", "birdswitharms", "jellybeantoes"];
        Color = 0x50FFFF;
    } else array = [];
}

exports.run = (client, message, args) => {
    let type = args.join(" ").toLowerCase();
    if (type === "") return message.reply("No culture specified.\n**Usage:** ~Culture [culture type]");
    setArray(type);
    let name = getName();
    if (name === null) return message.reply("That culture doesn't seem to exist in the database...\n Check the spelling or ask to have it created.");
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
	name: "Culture",
	description: "diffrent cultures",
	usage: "Culture [culture type]"
};
