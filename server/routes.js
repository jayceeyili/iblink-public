const presentation = require('./models/presentation.js');

module.exports = function(app) {
  // ««««««««« server routes »»»»»»»»»
  app.get('/api', (req, res) => {
    res.json('Hello World');
  });

  // other routes come here
  app.get('/presentations', (req, res) => {
    res.json(presentation.getPresentation());
  });
};
