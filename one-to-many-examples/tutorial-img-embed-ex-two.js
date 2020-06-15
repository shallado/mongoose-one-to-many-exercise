const tutorial = require('../controllers/tutorial');
const image = require('../controllers/image');

const tutorialInfo = {
  title: 'Star Wars',
  author: 'George Lucas'
};

async function exec() {
  const imageInfoOne = {
    path: 'sites/uploads/images/mongodb.png',
    url: '/images/mongodb.png',
    caption: 'MongoDB Database',
    createdAt: 1000
  };
  const imageOne = await image.createImage(imageInfoOne);
  const tutorialOne = await tutorial.createTutorial(tutorialInfo);
  const id = tutorialOne._id;

  tutorial.uploadImage(id, imageOne);

  const imageInfoTwo = {
    path: 'sites/uploads/images/mongodb.png',
    url: '/images/mongodb.png',
    caption: 'MongoDB Database',
    createdAt: 2000
  };
  const imageTwo = await image.createImage(imageInfoTwo);

  tutorial.uploadImage(id, imageTwo);

  tutorial.find(id);
}

exec();