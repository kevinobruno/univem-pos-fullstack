const mongoose = require('mongoose');

let userSchema = new mongoose.Schema(
  {
    student: { type: String },
    name: { type: String },
    email: { type: String },
    country: { type: String },
  },
  { collection: 'users' },
);

const UserModel = mongoose.model('users', userSchema);

let logSchema = new mongoose.Schema(
  {
    createdAt: { type: Date, default: Date.now },
    url: { type: String },
    method: { type: String },
  },
  { collection: 'logs' },
);

const LogModel = mongoose.model('logs', logSchema);

module.exports = { UserModel, userSchema, LogModel, logSchema };
