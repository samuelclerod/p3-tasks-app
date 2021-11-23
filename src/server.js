const { response, query } = require("express");
const express = require("express");

require("./db/mongoose");
const routes = require('./routes');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use('/', routes);

app.listen(port, () => console.log(`🚀 Running on port ${port} 🧑‍🚀`));


// const myFunction = async () => {
//   const password = 'unijuazeiro123';;
//   const hashedPassword = await bcrypt.hash(password, 8);

//   console.log('Password: ' + password)
//   console.log('hashedPassword: ' + hashedPassword)


//   const isMatch = await bcrypt.compare('unijuazeiro123', hashedPassword)
//   console.log(isMatch)

// }

// myFunction()