const { response, query } = require("express");
const express = require("express");
require("./db/mongoose");

const Task = require("./models/Task");

const app = express();
const port = process.env.PORT || 3000;

const usersRoutes = require('./routes/usersRoutes');

app.use(express.json());
app.use(usersRoutes)


app.post("/tasks", (request, response) => {
  const task = new Task(request.body);
  task
    .save()
    .then(() => response.status(201).send(task))
    .catch((error) => response.status(400).send(error.message));
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

app.get("/tasks/:id", (request, response) => {
  const id = request.params.id;
  Task.findById(id)
    .then((task) => {
      if (task) response.send(task);
      response.status(404).send();
    })
    .catch((error) => {
      response.status(500).send();
    });
});

app.listen(port, () => console.log(`🚀 Running on port ${port} 🧑‍🚀`));
