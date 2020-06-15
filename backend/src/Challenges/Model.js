const mongoose = require('mongoose')
const Schema = mongoose.Schema;
 
const ChallengeSchema = new Schema({
  name: String,
  area: String,
  description: String,
  inputFile: String,
  outputFile: String
});

module.exports = mongoose.model('Challenge', ChallengeSchema);