const Tutorial = (mongoose) => {
  const tutorialSchema = new mongoose.Schema({
    title: String,
    author: String,
    images: []
  });

  return mongoose.model('Tutorial', tutorialSchema);
};

module.exports = Tutorial;