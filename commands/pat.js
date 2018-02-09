const random = require('../rng.js');
exports.run = (client, message) => {
    let user = message.mentions.users.first();
    var gif = [
        "https://i.imgur.com/8dbkJW7.gif",
        "https://i.imgur.com/ArejGQL.gif",
        "https://i.imgur.com/nnr0Po5.gif",
        "https://i.imgur.com/lS0QIW2.gif",
        "https://i.imgur.com/T9tQc8l.gif",
        "https://i.imgur.com/Lie1LFy.gif",
        "https://i.imgur.com/KVBZTrT.gif",
        "https://i.imgur.com/jKfD2cJ.gif",
        "https://i.imgur.com/fp9XJZO.gif",
        "https://i.imgur.com/x0E1U4n.gif",
        "https://i.imgur.com/0e5YFbF.gif",
        "https://i.imgur.com/QkCghpp.gif",
        "https://i.imgur.com/m4xZJqj.gif",
        "https://i.imgur.com/Ekk16QF.gif",
        "https://i.imgur.com/sZ65lvE.gif",
        "https://i.imgur.com/VIxvOjQ.gif",
        "https://i.imgur.com/jl0jCev.gif",
        "https://i.imgur.com/EVTCTfd.gif",
        "https://i.imgur.com/410zYgR.gif",
        "https://i.imgur.com/YwwKG3e.gif",
        "https://i.imgur.com/xa50o5J.gif",
        "https://i.imgur.com/VtK0mBI.gif",
        "https://i.imgur.com/M904hih.gif",
        "https://i.imgur.com/qQh1dys.gif",
        "https://i.imgur.com/n7AOiGD.gif",
        "https://i.imgur.com/YPYFKoD.gif",
        "https://i.imgur.com/4qZi6qx.gif",
        "https://i.imgur.com/orWUzof.gif",
        "https://i.imgur.com/YHs5VYu.gif",
        "https://i.imgur.com/fM1SMua.gif",
        "https://i.imgur.com/yV9SsJs.gif",
        "https://i.imgur.com/HPuM9Zt.gif"
    ];
    var rng = random.rng(0, gif.length-1);
    message.channel.send({ embed: {
            title: `${message.author.username} pats ${user.username}`,
            color: 0xffffff,
            footer: {
              text: "Gif " + (rng + 1) + " : " + (gif.length).toString()
            },
            image: {
              url: gif[rng]
            }
        }
    });
};

exports.conf = {
	enabled: true,
	guildOnly: false,
	aliases: [],
	permLevel: 0
};

exports.help = {
	name: "pat",
	description: "Pat someone",
	usage: "pat [user]"
};