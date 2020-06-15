const mongoose = require('mongoose');
const Image = require('./image')(mongoose);
const Tutorial = require('./tutorial')(mongoose);

module.exports = {
  Image,
  Tutorial
};