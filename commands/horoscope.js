var getSign = require('horoscope').getSign;
exports.run = (client, message, args) => {
    let Date = args.slice();
    let Month = parseInt(Date[0]);
    let Day = parseInt(Date[1]);

    try {
        message.channel.send(getSign({month: Month, day: Day}));
    }
    catch (e) {
        message.reply("*The correct way to use the command is: **horoscope [month] [date]**");
    }
}

exports.conf = {
	enabled: true,
	guildOnly: false,
	aliases: [],
	permLevel: 0
};

exports.help = {
	name: "horoscope",
	description: "Tells you your astrological sign",
	usage: "horoscope [month] [date]"
};
