const presentation = require('./models/presentation.js');

module.exports = function(app) {
  // ««««««««« server routes »»»»»»»»»
  var pointer = 0;

  app.get('/api', (req, res) => {
    res.json('Hello World');
  });

  // other routes come here
  app.get('/presentations', (req, res) => {
    res.json(presentation.getPresentation());
  });


  app.post('/audience_presentation', (req, res) => {
    pointer = req.body.pointer;
    console.log(pointer);
    res.json();
  });

  app.get('/audience_presentation', (req, res) => {
    res.json(pointer);
  })
};
