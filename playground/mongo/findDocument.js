const { ObjectID } = require("bson");
const mongodb = require("mongodb");
const { MongoClient } = mongodb;

const database = "task-manager";
const connectionURL = "mongodb://localhost:27017";

MongoClient.connect(
  connectionURL,
  { useNewUrlParser: true },
  (error, client) => {
    if (error) {
      return console.log("unable to connect to mongodb");
    }
    const db = client.db(database);
    db.collection("users").findOne(
      { _id: ObjectID("617859a49b8bad2712678c6e") },
      (err, user) => {
        if (err) return console.log("Cannot find the user");
        console.log(user);
      }
    );
  }
);
