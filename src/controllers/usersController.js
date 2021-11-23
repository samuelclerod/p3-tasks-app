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


const update = async (request, response) => {
  const fields = Object.keys(request.body)
  const allowedFields = ["name", "email", "password", "age"];
  const valid = fields.every(field => allowedFields.includes(field))
  if (!valid) {
    return response.status(400).send({ error: 'invalid fields' })
  }

  try {
    const id = request.params.id;
    const user = await User.findById(id);
    if (!user) response.status(404).send();
    fields.forEach(field => user[field] = request.body[field])
    await user.save()

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