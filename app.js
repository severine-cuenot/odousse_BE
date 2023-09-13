// Révisions de comment marche un serveur, parce que je sui sgrave rouillée 

const express = require('express');
const app = express();

app.get('/', (request, response) => {
  response.send(`<html><ul><li><a href="/article/1">Article 1</a></li><li><a href="/article/2">Article 2</a></li></ul></html>`); });

app.listen(3000, () => {
  console.log(`Example app listening at http://localhost:3000`)
})
