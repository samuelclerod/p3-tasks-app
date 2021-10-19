const mongodb = require("mongodb");
const { MongoClient } = mongodb;

const database = "task-manager";
const connectionURL = `mongodb+srv://unijuazeiro:unijuazeiro@cluster0.gbm56.mongodb.net/${database}?retryWrites=true&w=majority`;

const createMongoClient = MongoClient.connect(
  connectionURL,
  { useNewUrlParser: true },
  (error, client) => {
    if (error) {
      return console.log("unable to connect to mongodb");
    }
    console.log("connected to database");
  }
);
