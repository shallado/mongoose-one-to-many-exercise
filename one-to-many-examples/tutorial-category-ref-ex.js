const category = require('../controllers/category');
const tutorial = require('../controllers/tutorial');

// example is one-to-many(aLot) category has many tutorials
// ref method is used here
async function execute() {
  const categoryOne = await category.createCategory({
    name: 'Node.js',
    description: 'Node.js tutorial'
  });
  const tutorialOne = await tutorial.createTutorial({
    title: 'Tutorial #1',
    author: 'steve jobs'
  });
  const tutorialTwo = await tutorial.createTutorial({
    title: 'Tutorial #2',
    author: 'bill gates'
  });

  tutorial.addCategory(tutorialOne._id, categoryOne._id);
  tutorial.addCategory(tutorialTwo._id, categoryOne._id);

  tutorial.findAndPopulateCategory(categoryOne._id);
}

execute();