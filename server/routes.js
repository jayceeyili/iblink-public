const router = require('express').Router();

const controller = require('./controllers');


module.exports = function (app) {
  // ««««««««« server routes »»»»»»»»»
  let maxSlide = 0;


  // ««««««««« API routes »»»»»»»»»
  app.get('/presentations', (req, res) => {
    res.json(presentation.getPresentation());
  });

  app.post('/audience_presentation', (req, res) => {
    maxSlide = req.body.maxSlide;
    console.log(maxSlide);
    res.json();
  });

  app.get('/audience_presentation', (req, res) => {
    res.json(maxSlide);
  });
};


// Connect controller methods to their corresponding routes
router.get('/', controller.homepage.get);

// router.get(/^\d+$/, controller.channel.get);
router.get('/:id([0-9]{1,5})', controller.channel.get);  // id: a number from 1 to 5 digits long

router.get('/presentations', controller.presentation.get);
router.post('/presentations', controller.presentation.post);


module.exports = router;

