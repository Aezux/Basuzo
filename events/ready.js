
        //888888b.
        //888  "88b                           Adrian Hyc
        //888  .88P
        //8888888K.   8888b.  .d8888b  888  888 88888888  .d88b.
        //888  "Y88b     "88b 88K      888  888    d88P  d88""88b
        //888    888 .d888888 "Y8888b. 888  888   d88P   888  888
        //888   d88P 888  888      X88 Y88b 888  d88P    Y88..88P
/**     //8888888P"  "Y888888  88888P'  "Y88888 88888888  "Y88P"
 * 
 * This event happens when the bot gets powered on.
 */

const settings = require("../settings.json");
module.exports = client => {

    /* Bot boot-up message */
    console.log("I'm online fam");

    /* Sets the game that the bot is playing */
    client.user.setPresence({ game: { name: `〜help：すべてのコマンドを表示する`, type: 0 } });

};
