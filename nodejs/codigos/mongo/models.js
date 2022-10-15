const mongoose = require('mongoose');

const Schema = mongoose.Schema;

let studentSchema = new Schema(
  {
    name: { type: String },
    email: { type: String },
  },
  { collection: 'student' },
);

const StudentModel = mongoose.model('student', studentSchema);

module.exports = { StudentModel, studentSchema };
