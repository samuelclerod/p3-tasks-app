const { findByIdAndDelete } = require("../models/User");
const User = require("../models/User");

const create = async (request, response) => {
  const user = new User(request.body);
  try {
    await user.save();
    response.status(201).send(user);
  } catch (error) {
    response.status(400).send({
      error: error.message,
    });
  }
}

const list = async (request, response) => {
  try {
    const users = await User.find({});
    response.status(200).send(users);
  } catch (error) {
    response.status(500).send();
  }
}

const find = async (request, response) => {
  const id = request.params.id;
  try {
    const user = await User.findById(id)
    if (!user) response.status(404).send();
    response.send({ user });
  } catch (error) {
    response.status(500).send();
  }
}

const areValidFields = (body) => {
  const fields = Object.keys(body)
  const allowedFields = ["name", "email", "password", "age"];
  return fields.every(field => allowedFields.includes(field))
}

const update = async (request, response) => {
  const id = request.params.id;
  if (!areValidFields(request.body)) {
    return response.status(400).send({ error: 'invalid fields' })
  }
  try {
    const user = await User.findByIdAndUpdate(id, request.body, {
      new: true,
      runValidators: true,
    })
    response.status(200).send(user)
  } catch (error) {
    response.status(400).send({
      error: error.message,
    });
  }
}

const remove = async (request, response) => {
  const id = request.params.id
  try {
    const user = await User.findByIdAndDelete(id);
    if (!user) return response.status(404).send()
    return response.send({ message: `User ${user.name} was removed` })
  } catch (error) {
    response.status(500).send()
  }
}

module.exports = { create, list, find, update, remove }