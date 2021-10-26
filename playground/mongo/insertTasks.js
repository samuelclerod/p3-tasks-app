const mongodb = require("mongodb");
const { MongoClient } = mongodb;

const database = "task-manager";
const connectionURL = "mongodb://localhost:27017";

const tasks = [
  {
    description: "Vir para unijuazeiro assistir aula",
    completed: true,
  },
  {
    description: "Fazer feira no atacadão",
    completed: false,
  },
  {
    description: "Comprar um novo macbook pro quando juntar os 18K",
    completed: false,
  },
];

MongoClient.connect(connectionURL, {
  useNewUrlParser: true,
})
  .then((client) => {
    client
      .db(database)
      .collection("tasks")
      .insertMany(tasks)
      .then((result) => console.log(result))
      .catch((error) => console.error(error));
  })
  .catch((error) => {
    console.log("Unable do connect to mongodb");
  });
