const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
  description: {
    type: String,
    required: [true, "You cannot add task without description."],
    trim: true,
  },
  completed: {
    type: Boolean,
    required: false,
    default: false,
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'User'
  }
})

const Task = mongoose.model("Task", taskSchema);

module.exports = Task;
