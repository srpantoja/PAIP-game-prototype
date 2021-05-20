const mongoose = require('mongoose')
const Schema = mongoose.Schema;
 //Constante de submissão de dados do estudante, da resposta etc.
const SubmissionSchema = new Schema({
  studentId: Schema.Types.ObjectId,
  challengeId: Schema.Types.ObjectId,
  code: String,
  result: Boolean,
  error: String
});

module.exports = mongoose.model('Submission', SubmissionSchema);