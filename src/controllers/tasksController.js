const User = require("../models/Task");

const create = async (request, response) => {
  const task = new Task(request.body);
  task
    .save()
    .then(() => response.status(201).send(task))
    .catch((error) => response.status(400).send(error.message));
}

const list = async (request, response) => {
  Task.find({})
    .then((tasks) => {
      response.send(tasks);
    })
    .catch((error) => {
      response.status(500).send();
    });
}

const find = async (request, response) => {
  const id = request.params.id;
  Task.findById(id)
    .then((task) => {
      if (task) response.send(task);
      response.status(404).send();
    })
    .catch((error) => {
      response.status(500).send();
    });
}

// const update = async (request, response) => {

// }

module.exports = { create, list, find, update }