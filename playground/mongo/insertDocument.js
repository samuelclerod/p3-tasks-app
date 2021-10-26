const mongodb = require("mongodb");
const { MongoClient } = mongodb;

const database = "task-manager";
const connectionURL = "mongodb://localhost:27017";

MongoClient.connect(connectionURL, { useNewUrlParser: true })
  .then((client) => {
    client
      .db(database)
      .collection("users")
      .insertMany([
        {
          name: "Anakin Skywalker",
          age: "26",
        },
        {
          name: "Meste Yoda",
          age: "400",
        },
      ])
      .then((result) => console.log(result));
  })
  .catch((error) => {
    console.log("unable to connect to mongodb");
  });
