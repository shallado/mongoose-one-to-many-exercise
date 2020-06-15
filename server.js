const express = require('express');
const mongoose = require('mongoose');

const app = express();
const port = 8080;

mongoose.connect('mongodb://127.0.0.1/one-to-many-exercise', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => console.log('Successfully connected to the database'))
  .catch((err) => console.log(err));

require('./one-to-many-examples/tutorial-img-embed');

app.listen(port, () => console.log(
  `Successfully connected to server on port: ${port}`
));