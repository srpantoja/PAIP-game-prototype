const mongoose = require('mongoose')
const Schema = mongoose.Schema;
 
const StudentSchema = new Schema({
  curso: String,
  gender: String,
  login: String,
  password: String
});

module.exports = mongoose.model('Student', StudentSchema);