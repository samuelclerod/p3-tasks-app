const express = require("express");
const { default: User } = require("./models/User");
require("./db/mongoose");

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.get("/users", (request, response) => {
  User.find()
    .then((users) => {
      response.status(200).send(users);
    })
    .catch((error) => {
      response.status(500).send();
    });
});

app.listen(port, () => console.log(`🚀 Running on port ${port} 🧑‍🚀`));
