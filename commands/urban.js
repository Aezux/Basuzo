exports.run = (client, message, args) => {
    const urban = require('urban');
    let search = args.join(' ');
    if (!search) return message.reply("It's kinda pointless to search for nothing.");
    var searchResult = urban(search);
    searchResult.first(output => {
        message.channel.send({ embed: {
                color: 0xFAF0BE,
                author: {
                    name: "Search result for: " + output.word,
                    icon_url: "http://m.img.brothersoft.com/win7_img/icon/93/935635a6-faf1-4540-afa6-3cab376e04e3.png"
                },
                description: "**Definition:** *" + output.definition + "*\n\n**Example:** *" + output.example + "*",
                footer: {
                  text: output.thumbs_up + " 👍 " + output.thumbs_down + " 👎"
                }
            }
        });
    })
};

exports.conf = {
	enabled: true,
	guildOnly: false,
	aliases: [],
	permLevel: 0
};

exports.help = {
	name: "urban",
	description: "Search the urban dictionary",
	usage: "urban [search]"
};
