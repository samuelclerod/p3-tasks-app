const mongodb = require("mongodb");
const { MongoClient } = mongodb;

const database = "task-manager";
const connectionURL = "mongodb://localhost:27017";

const createMongoClient = (error, client) => {
  if (error) {
    return console.log("unable to connect to mongodb");
  }
  const db = client.db(database);
  db.collection("users").insertMany(
    [
      {
        name: "Luke Skywalker",
        age: "16",
      },
      {
        name: "Leia Organa",
        age: "16",
      },
    ],
    (error, result) => {
      if (error) return console.log("Unable to insert documents");
      console.log(result);
    }
  );
};

MongoClient.connect(
  connectionURL,
  { useNewUrlParser: true },
  createMongoClient
);

// 1. User insertMany para inserir 3 documentos (description, completed, status) numa coleção chamada tasks;
// 2. Utilizando o callback mostra erros ou os resultados;
// 3. Verificar se os arquivos foram inseridos no MongoDBCompass;
// https://docs.mongodb.com/manual/
