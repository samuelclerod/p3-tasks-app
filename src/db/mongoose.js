const mongoose = require("mongoose");
const validator = require("validator");

// ORM - Object Relational Mapper -> JPA[Java EE], TypeORM[Javascript], ActiveRecord[Ruby on Rails]
// ODM - Object Document Mapper -> Mongoose

mongoose.connect("mongodb://localhost:27017/task-manager-api", {
  useNewUrlParser: true,
  // useCreateIndex: true,
});

// const Task = mongoose.model("Task", {
//   description: {
//     type: String,
//   },
//   completed: {
//     type: Boolean,
//   },
// });

// const myTask = new Task({
//   description: "Aprender como usar o mongoose",
//   completed: false,
// });

// myTask
//   .save()
//   .then(() => console.log("Task: ", myTask))
//   .catch((err) => console.log(err));

const User = mongoose.model("User", {
  name: {
    type: String,
    trim: true,
    required: true,
  },
  email: {
    type: String,
    required: true,
    trim: true,
    validate: (value) => {
      if (!validator.isEmail(value))
        throw new Error("This e-mail is not valid");
    },
  },
  age: {
    type: Number,
    validate: (value) => {
      if (value < 0) throw new Error("Age must be a positive number.");
    },
  },
  password: {
    type: String,
    required: true,
    minLength: 6,
    trim: true,
    validate: (value) => {
      console.log(value);
      if (value.toLowerCase().includes("password"))
        throw new Error("You can not use the word `password` as password.");
    },
  },
});

const me = new User({
  name: "Ademar",
  age: 27,
  email: "ademar@lerolero.com",
  password: "    PASSWORD   ",
});

me.save()
  .then(() => console.log(me))
  .catch((error) => console.error(error.message));
