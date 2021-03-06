const mongoose = require('mongoose');
const Category = require('./category')(mongoose);
const Comment = require('./comment')(mongoose);
const Image = require('./image')(mongoose);
const Tutorial = require('./tutorial')(mongoose);

module.exports = {
  Image,
  Tutorial,
  Comment,
  Category
};