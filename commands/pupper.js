const random = require('../rng.js');
const randomPuppy = require('random-puppy');
exports.run = (client, message) => {
    var array = ["rarepuppers", "shiba", "puppies", "dogpictures"];
    let length = array.length;
    let Color = 0xf0ffff;
    let rng = random.rng(0, length-1);
    let name = array[rng];
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
	aliases: [],
	permLevel: 0
};

exports.help = {
	name: "pupper",
	description: "Pupper pictures",
	usage: "pupper"
};
