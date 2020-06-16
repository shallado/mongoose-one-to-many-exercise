const tutorial = require('../controllers/tutorial');

const tutorialInfo = {
  title: 'Star Wars',
  author: 'George Lucas' 
};


// one-to-many relationship tutorial can have many images
// embedded docs method
async function execute() {
  const tutorialOne = await tutorial.createTutorial(tutorialInfo);
  const id = tutorialOne._id;
  const imageInfoOne = {
    path: 'sites/uploads/images/mongodb.png',
    url: '/images/mongodb.png',
    caption: 'MongoDB Database',
    createdAt: 1000
  };

  tutorial.uploadImage(id, imageInfoOne);

  const imageInfoTwo = {
    path: 'sites/uploads/images/mongodb.png',
    url: '/images/mongodb.png',
    caption: 'MongoDB Database',
    createdAt: 2000
  };

  tutorial.uploadImage(id, imageInfoTwo);

  tutorial.find(id);
}

execute();