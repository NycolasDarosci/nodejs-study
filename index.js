const { configDotenv } = require('dotenv');
const databaseConnection = require('./src/database/connection')
const app = require('./modules/express');
// const { Person } = require('./person');

configDotenv()
databaseConnection();
app.listen(process.env.PORT, () => console.log(`Listen to http://localhost:${process.env.PORT}`));

// require('./modules/path');
// require('./modules/fs');
// require('./modules/http');

// const person = new Person('Alice');
// console.log(person.sayMyName());
