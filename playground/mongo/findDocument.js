const { ObjectID } = require("mongodb");
const mongodb = require("mongodb");
const { MongoClient } = mongodb;

const database = "task-manager";
const connectionURL = "mongodb://localhost:27017";

MongoClient.connect(connectionURL, { useNewUrlParser: true }).then((client) => {
  client
    .db(database)
    .collection("users")
    .find({ age: "16" })
    .count()
    .then((count) => console.log("number of regs: ", count));

  client
    .db(database)
    .collection("users")
    .find({ age: "16" })
    .toArray()
    .then((arr) => console.log(arr));
});

// MongoClient.connect(
//   connectionURL,
//   { useNewUrlParser: true },
//   (error, client) => {
//     if (error) {
//       return console.log("unable to connect to mongodb");
//     }
//     const db = client.db(database);
//     db.collection("users").findOne({ age: "16" }, (err, user) => {
//       if (err) return console.log("Cannot connect to collection");
//       console.log(user);
//     });
//   }
// );
