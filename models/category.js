const Category = (mongoose) => {
  const categorySchema = new mongoose.Schema({
    name: String,
    description: String
  });

  return mongoose.model('Category', categorySchema);
};

module.exports = Category;