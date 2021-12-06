const { response, query } = require("express");
const express = require("express");
const Task = require("./models/Task");
const User = require("./models/User");

require("./db/mongoose");
const routes = require('./routes');

const app = express();
const port = process.env.PORT || 3000;

app.use((request, response, next) => {
  console.log(`${request.method} => ${request.path}`);
  next();
})

app.use(express.json());
app.use('/', routes);

app.listen(port, () => console.log(`🚀 Running on port ${port} 🧑‍🚀`));


const main = async () => {
  // const task = await Task.findById('61a6b96ddd61f5288807a2a6')
  // await task.populate('owner')
  // console.log(task.owner.name)

  // const user = await User.findById('61a6b925dd61f5288807a293');
  // await user.populate('tasks')
  // console.log(user.tasks)

}


main()