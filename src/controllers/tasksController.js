const Task = require("../models/Task");

const create = async (request, response) => {
  const task = new Task({ ...request.body, owner: request.user._id });
  task
    .save()
    .then(() => response.status(201).send(task))
    .catch((error) => response.status(400).send(error.message));
}

const list = async (request, response) => {

  try {
    await request.user.populate('tasks')
    response.send(request.user.tasks)
  } catch (error) {
    response.status(500).send();
  }
}

const find = async (request, response) => {
  const id = request.params.id;

  try {
    const task = await Task.findOne({ _id: id, owner: request.user._id })
    if (task) response.send(task);
    response.status(404).send();
  } catch (error) {
    response.status(500).send();
  }
}

const update = async (request, response) => {

}

const remove = async (request, response) => {

}

module.exports = { create, list, find, update, remove }