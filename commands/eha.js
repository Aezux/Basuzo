exports.run = (client, message) => {
    let user = message.mentions.users.first();
    let userMessage = user.lastMessage;
    userMessage.react("🇪")
    .then ( () => {
        userMessage.react("🇦")
        .then ( () => {
            userMessage.react("🇹")
            .then ( () => {
                userMessage.react("😋")
                .then ( () => {
                    userMessage.react("🇭")
                    .then ( () => {
                        userMessage.react("☪")
                        .then ( () => {
                            userMessage.react("🇷")
                            .then ( () => {
                                userMessage.react("🍑")
                                .then ( () => {
                                    userMessage.react("🅰")
                                    .then ( () => {
                                        userMessage.react("🇸")
                                        .then ( () => {
                                            userMessage.react("💲")
                                            .then ( () => {
                                                userMessage.react("😡");
                                            })
                                        })
                                    })
                                })
                            })
                        })
                    })
                })
            })
        })
    })
    message.delete();
}

exports.conf = {
	enabled: true,
	guildOnly: false,
	aliases: [],
	permLevel: 0
};

exports.help = {
	name: "eha",
	description: "Eat her ass",
	usage: "eha [user]"
};
