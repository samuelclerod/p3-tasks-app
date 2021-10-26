const mongodb = require('mongodb');
const {MongoClient, ObjectId} = mongodb;


const database = "task-manager";
const connectionURL = "mongodb://localhost:27017";
MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {
  
  if(error) return console.log('unable to connect to mongodb');
  
  const id = new ObjectId();
  console.log(id)
  console.log(id.id)
  console.log(id.id.length)
  console.log(id.toHexString())
  console.log(id.toHexString().length)
  console.log(id.getTimestamp())

})