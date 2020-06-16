const { Category } = require('../models');

exports.createCategory = (categoryInfo) => {
  return Category.create(categoryInfo)
    .then((category) => category)
    .catch((err) => console.log(err));
};