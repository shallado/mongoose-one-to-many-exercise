const { Tutorial } = require('../models');

exports.createTutorial = (tutorialInfo) => {
  return Tutorial.create(tutorialInfo)
    .then((tutorial) => tutorial)
    .catch((err) => console.log(err));
};

exports.uploadImage = (tutorialId, image) => {
  Tutorial.findByIdAndUpdate(
    tutorialId, 
    { $push: { images: image } }, 
    { new: true }
  )
    .then((customer) => console.log(customer))
    .catch((err) => console.log(err));
};