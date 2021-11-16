const express = require('express');
const router = express.Router();

const User = require("../models/User");

router.post("/users", async (request, response) => {
  const user = new User(request.body);
  try {
    await user.save();
    response.status(201).send(user);
  } catch (error) {
    response.status(400).send({
      error: error.message,
    });
  }
});

router.get("/users", (request, response) => {
  User.find()
    .then((users) => {
      response.status(200).send(users);
    })
    .catch((error) => {
      response.status(500).send();
    });
});

router.get("/users/:id", (request, response) => {
  const id = request.params.id;
  User.findById(id)
    .then((user) => {
      if (!user) response.status(404).send();
      const { _id, name, email, age } = user;
      response.send({ _id, name, email, age });
    })
    .catch((error) => response.status(500).send());
});


module.exports = router