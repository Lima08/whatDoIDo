const express = require('express');


app.use(express.json());

app.get('/', (request, response) => {
  response.send();
});