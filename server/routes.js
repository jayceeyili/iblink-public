module.exports = function(app) {
  // ««««««««« server routes »»»»»»»»»
  app.get('/api', ( req, res ) => {
    res.json('Hello World');
  })

  // other routes come here
};
