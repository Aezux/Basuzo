const settings = require('../settings.json');
module.exports = client => {
    console.log("I'm online fam");
    client.user.setPresence({ game: { name: settings.prefix + "help", type: 0 } });
};
