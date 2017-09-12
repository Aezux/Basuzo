const stamp = require('../timeStamp.js');
module.exports = client => {
    console.log(`${stamp.time()} We are reconnecting boss...`);
};
