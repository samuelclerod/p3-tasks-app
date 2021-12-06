const { response } = require("express");
const User = require("../models/User");

const UsersController = {

  create: async (request, response) => {
    const user = new User(request.body);
    try {
      await user.save();
      const token = await user.generateAuthToken();
      response.status(201).send({ user, token });
    } catch (error) {
      response.status(400).send({
        error: error.message,
      });
    }
  },

  list: async (request, response) => {
    try {
      const users = await User.find({});
      response.status(200).send(users);
    } catch (error) {
      response.status(500).send();
    }
  },

  find: async (request, response) => {
    try {
      response.json({ user: request.user });
    } catch (error) {
      console.error(error)
      response.status(500).send();
    }
  },

  update: async (request, response) => {
    const fields = Object.keys(request.body)
    const allowedFields = ["name", "email", "password", "age"];
    const valid = fields.every(field => allowedFields.includes(field))
    if (!valid) {
      return response.status(400).send({ error: 'invalid fields' })
    }

    try {
      fields.forEach(field => request.user[field] = request.body[field])
      await request.user.save()

      response.status(200).send(request.user)
    } catch (error) {
      response.status(400).send({
        error: error.message,
      });
    }
  },

  remove: async (request, response) => {
    try {
      await request.user.remove()
      return response.send({ message: `User ${request.user.name} was removed` })
    } catch (error) {
      response.status(500).send()
    }
  },

  login: async (request, response) => {
    const { email, password } = request.body;
    try {
      const user = await User.findByCredencials(email, password);
      const token = await user.generateAuthToken();
      response.send({ user, token })
    } catch (error) {
      response.status(401).send({ error: error.message });
    }
  },

  logOut: async (request, response) => {
    try {
      request.user.tokens = request.user.tokens.filter(({ token }) => token !== request.token);
      await request.user.save()
      response.send()
    } catch (error) {
      response.status(500).send()
    }
  },

  logOutAll: async (request, response) => {
    try {
      request.user.tokens = [];
      await request.user.save()
      response.send()
    } catch (error) {
      response.status(500).send()
    }
  },

}



module.exports = UsersController;