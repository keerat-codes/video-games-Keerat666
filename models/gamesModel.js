const mongoose = require('mongoose');

const gamesModelSchema = new mongoose.Schema({
videoGameName : { type:  String, description: "Required Field", required: true },
yearOfPublishing : { type:  Number, description: "Required Field", required: true },
});

module.exports = mongoose.model('gamesModel', gamesModelSchema);