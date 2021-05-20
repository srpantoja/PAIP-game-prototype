const mongoose = require('mongoose')
const Schema = mongoose.Schema;
// 'Student' e seus elementos 
const StudentSchema = new Schema({
  curso: String,
  gender: String,
  login: String,
  password: String
});

module.exports = mongoose.model('Student', StudentSchema);