// models/Task.js
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const taskSchema = new Schema(
  {
    description: String,
    completed: Boolean,
  },
  {
    timestamps: true,
  }
);

const Task = mongoose.model('Task', taskSchema);

module.exports = Task;
