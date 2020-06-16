const comment = require('../controllers/comment');
const tutorial = require('../controllers/tutorial');

// example of one-to-many tutorials have many comments
// ref methods is used here
async function execute() {
  const tutorialInfo = {
    title: 'Star Wars',
    author: 'George Lucas'
  };
  const commentOne = await comment.createComment({
    username: 'steve jobs',
    text: 'This is a great tutorial',
    createdAt: 100000
  });
  const commentTwo = await comment.createComment({
    username: 'bill gates',
    text: 'This is a great tutorial #2',
    createdAt: 20000
  });
  const tutorialOne = await tutorial.createTutorial(tutorialInfo);

  tutorial.addComment(tutorialOne._id, commentOne._id);
  tutorial.addComment(tutorialOne._id, commentTwo._id);

  tutorial.findAndPopulateComments(tutorialOne._id);
}

execute();
