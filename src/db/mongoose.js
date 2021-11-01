const mongoose = require("mongoose");

// ORM - Object Relational Mapper -> JPA[Java EE], TypeORM[Javascript], ActiveRecord[Ruby on Rails]
// ODM - Object Document Mapper -> Mongoose

mongoose.connect("mongodb://localhost:27017/task-manager-api", {
  useNewUrlParser: true,
  // useCreateIndex: true,
});

const User = mongoose.model("User", {
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
  },
});

const me = new User({ name: "Rafael barbosa", age: 37 });

me.save()
  .then(() => console.log(me))
  .catch((error) => console.log(error));
