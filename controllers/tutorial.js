const { Tutorial } = require('../models');

exports.createTutorial = (tutorialInfo) => {
  Tutorial.create(tutorialInfo)
    .then((tutorial) => console.log(tutorial))
    .catch((err) => console.log(err));
};