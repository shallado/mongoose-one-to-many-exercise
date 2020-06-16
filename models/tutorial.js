const Tutorial = (mongoose) => {
  const tutorialSchema = new mongoose.Schema({
    title: String,
    author: String,
    images: [],
    comments: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Comment'
    }],
    category: mongoose.Schema.Types.ObjectId
  });

  return mongoose.model('Tutorial', tutorialSchema);
};

module.exports = Tutorial;