// import the controllers
// This only specifies the folder name, which means it will automatically pull the index.js file
const controllers = require('./controllers');

// function to attach routes
const router = (app) => {
  // pass the express app in

  // app.VERB maps get requests to a middleware action
  // For example
  // app.get handles GET requests
  // app.post handles POST requests

  // establish all the urls that the app will respond to.
  app.get('/page1', controllers.page1);
  app.get('/page2', controllers.page2);
  app.get('/page3', controllers.page3);
  app.get('/page4', controllers.page4);
  app.get('/getName', controllers.getName);
  app.get('/findByName', controllers.searchName);
  app.get('/findDog', controllers.searchDog);

  // whenever someone goes to the site without a path (AKA the home page), call controllers.index
  // For example www.webpage.com
  app.get('/', controllers.index);

  // catch for any other GET request. The * means anything
  app.get('/*', controllers.notFound);

  // When someone POSTS to /setName, call controllers.setName
  // For example, a form submission to www.webpage.com/setName
  app.post('/setName', controllers.setName);
  app.post('/createDog', controllers.createDog);
  // When someone POSTS to /updateLast, call controllers.updateLast
  app.post('/updateLast', controllers.updateLast);
  //catch for any other unidentified POST requests.
  app.post('/*', controllers.notFound);
};

// export the router function
module.exports = router;
