const { mongo } = require("mongoose");

const Image = (mongoose) => {
  const imageSchema = new mongoose.Schema({
    path: String,
    url: String,
    caption: String,
    createdAt: Date
  });

  return mongoose.model('Image', imageSchema);
};

module.exports = Image;