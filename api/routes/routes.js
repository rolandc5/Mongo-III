const userMethods = require('../controllers/userControllers');
const postMethods = require('../controllers/postControllers');
module.exports = (app) => { 
  app
    .route('/new-user')
    .post(userMethods.newUser);
  app
    .route('/login')
    .post(userMethods.login);
  app
    .route('/new-post')
    .post(postMethods.newPosts);
  app
    .route('/posts')
    .get(postMethods.getPosts);
  app
    .route('/posts/:id')
    .get(postMethods.getPost)
    .put(postMethods.addComment);
};
