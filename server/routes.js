const path = require('path');

const presentation = require('./models/presentation.js');

module.exports = function (app) {
  // ««««««««« server routes »»»»»»»»»
  let maxSlide = 0;

  app.get('/api', (req, res) => {
    res.json('Hello World');
  });

  // other routes come here
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
