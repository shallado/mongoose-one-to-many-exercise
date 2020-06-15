const tutorial = require('../controllers/tutorial');

const tutorialInfo = {
  title: 'Star Wars',
  author: 'George Lucas' 
};

tutorial.createTutorial(tutorialInfo);