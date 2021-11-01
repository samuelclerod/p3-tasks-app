const { ObjectID } = require("bson");
const { MongoClient } = require("mongodb");

MongoClient.connect("mongodb://localhost:27017", {
  useNewUrlParser: true,
}).then((client) => {
  client
    .db("task-manager")
    .collection("users")
    .deleteOne({ _id: ObjectID("6177351ca8a77ab50279d447") })
    .then(() => {
      console.log("Document removed");
    })
    .catch((error) => console.log("Something gone wrong"));
});

//utilizar o deleteMany (pesquisar) e remover tasks já concluídas
