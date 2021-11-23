const { Schema, model } = require("mongoose");
const validator = require("validator");
const bcrypt = require('bcryptjs')

const userSchema = new Schema({
  name: {
    type: String,
    trim: true,
    required: true,
  },
  email: {
    type: String,
    unique: [true, 'This e-mail already taken'],
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
      if (value.toLowerCase().includes("password"))
        throw new Error("You can not use the word `password` as password.");
    },
  },
})

userSchema.pre("save", async function (next) {
  const user = this;

  if (user.isModified('password')) {
    user.password = await bcrypt.hash(user.password, 8);
  }

  next();
})

const User = model("User", userSchema);

module.exports = User;
