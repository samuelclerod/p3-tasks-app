const mongoose = require("mongoose");
const validator = require("validator");

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

exports.default = User;
