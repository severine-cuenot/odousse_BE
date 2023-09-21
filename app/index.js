
const express = require('express');
const cors = require('cors');
const app = express();

const corsOptions = { credentials: true, origin: '*'};

app.use(cors(corsOptions));

// app.get('/', (request, response) => {
//   response.send(`Hello World!`); });

// app.listen(3000, () => {
//   console.log(`Example app listening at http://localhost:3000`)
// })

module.exports = app;