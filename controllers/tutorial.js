const { Tutorial } = require('../models');

exports.createTutorial = (tutorialInfo) => {
  return Tutorial.create(tutorialInfo)
    .then((tutorial) => tutorial)
    .catch((err) => console.log(err));
};

exports.uploadImage = (tutorialId, image) => {
  return Tutorial.findByIdAndUpdate(
    tutorialId, 
    { $push: { images: image } }, 
    { new: true }
  )
    .then((customer) => customer)
    .catch((err) => console.log(err));
};

exports.addComment = (tutorialId, commentId) => {
  return Tutorial.findByIdAndUpdate(
    tutorialId,
    { $push: { comments: commentId } },
    { new: true }
  )
    .then((tutorial) => tutorial)
    .catch((err) => console.log(err));
};

exports.find = (id) => {
  Tutorial.findById(id)
    .then((tutorial) => console.log(tutorial))
    .catch((err) => console.log(err));
}

exports.findAndPopulate = (id) => {
    Tutorial.findById(id).populate('comments', '-__v -_id')
      .then((tutorial) => console.log(tutorial))
      .catch((err) => console.log(err));
};