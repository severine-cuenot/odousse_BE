// console.log('Hello World')
const express = require('express');
const app = express();
const port = 3000;

app.get('/', (request, response) => {
    response.send('Hellow world');
});

app.listen(port, () => {
    console.log(`example app listening at http://localhost:${port}`);
});