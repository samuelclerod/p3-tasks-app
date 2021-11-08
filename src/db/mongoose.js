const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/task-manager-api", {
  useNewUrlParser: true,
  // useCreateIndex: true,
});

// const Task = mongoose.model("Task", {
//   description: {
//     type: String,
//     required: [true, "You cannot add task without description."],
//     trim: true,
//   },
//   completed: {
//     type: Boolean,
//     required: false,
//     default: false,
//   },
// });
