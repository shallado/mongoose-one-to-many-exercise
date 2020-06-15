const Comment = (mongoose) => {
  const commentSchema = new mongoose.Schema({
    username: String,
    text: String,
    createdAt: Date
  });

  return mongoose.model('Comment', commentSchema);
};

module.exports = Comment;