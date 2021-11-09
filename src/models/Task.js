const mongoose = require("mongoose");

const Task = mongoose.model("Task", {
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
});

module.exports = Task;
