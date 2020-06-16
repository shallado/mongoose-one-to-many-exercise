const { Comment } = require('../models');

exports.createComment = (commentInfo) => {
  return Comment.create(commentInfo)
    .then((comment) => comment)
    .catch((err) => console.log(err));
};