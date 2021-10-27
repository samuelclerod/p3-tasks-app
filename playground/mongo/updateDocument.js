const { MongoClient, ObjectId } = require("mongodb");

const database = "task-manager";
const connectionURL = "mongodb://localhost:27017";

MongoClient.connect(connectionURL, { useNewUrlParser: true }).then((client) => {
  client
    .db(database)
    .collection("users")
    .updateMany(
      { age: 17 },
      {
        $inc: {
          age: -1,
        },
      }
    )
    .then((result) => console.log(result))
    .catch((error) => console.log(error));
});

// MongoClient.connect(connectionURL, { useNewUrlParser: true }).then((client) => {
//   client
//     .db(database)
//     .collection("users")
//     .updateOne(
//       { _id: ObjectId("6178973da9a3f114cb6e43b5") },
//       {
//         $set: {
//           name: "Darth Vaider",
//         },
//       }
//     )
//     .then((result) => console.log(result))
//     .catch((error) => console.log(error));
// });

//TODO Usando esse arquivo como exemplo, complete
// todas as tasks para completed
