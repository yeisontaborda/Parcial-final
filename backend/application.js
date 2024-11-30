'use strict'

const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send('Hello, world!');
  res.send(' Hola, mundo! ');
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
  console.log(`Servidor escuchando en el puerto ${port}`);
});


