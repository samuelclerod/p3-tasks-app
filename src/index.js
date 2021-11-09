const express = require("express");
require("./db/mongoose");

const Task = require("./models/Task");
const User = require("./models/User");

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.post("/users", (request, response) => {
  const user = new User(request.body);
  user
    .save()
    .then(() => {
      response.status(201).send(user);
    })
    .catch((error) => {
      response.status(400).send({
        error: error.message,
      });
    });
});

app.get("/users", (request, response) => {
  User.find()
    .then((users) => {
      response.status(200).send(users);
    })
    .catch((error) => {
      response.status(500).send();
    });
});

app.get("/tasks", (request, response) => {
  Task.find({})
    .then((tasks) => {
      response.send(tasks);
    })
    .catch((error) => {
      response.status(500).send();
    });
});

app.listen(port, () => console.log(`🚀 Running on port ${port} 🧑‍🚀`));
