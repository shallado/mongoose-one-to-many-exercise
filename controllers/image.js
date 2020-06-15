const { Image } = require('../models');

exports.createImage = (imageInfo) => {
  return Image.create(imageInfo)
    .then((image) => image)
    .catch((err) => console.log(err));
};