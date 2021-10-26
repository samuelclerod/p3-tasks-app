const mongodb = require('mongodb');
const {MongoClient} = mongodb;


const database = "task-manager";
const connectionURL = "mongodb://localhost:27017";
MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {
  if(error) return console.log('unable to connect to mongodb');
  const db = client.db(database);

  db.collection('tasks').insertMany([
    {
      description: 'First description', completed:true,
    },
    {
      description: 'Second description', completed:true,
    },
    {
      description: 'Third description', completed:false,
    },
  ], (error, result)=> {
    if (error) return console.log("Unable to insert documents");
    console.log(result);
  })

})