const path = require('path');
const presentation = require('../models/presentation');

module.exports = {

  homepage: {
    get(req, res) {
      // res.send(renderFullPage());
      // console.log('homepage channel:', req.query.channel);
      res.render('master', { channel: req.query.channel });
    }
  },

  channel: {
    get(req, res) {
      // res.set({ 'Content-Disposition': 'filename="index.html"' });
      // res.type('html');
      res.redirect(`/?channel=${req.params.id}`);

      // res.render('master', { channel: '-1' }); // { channel: req.params.id });
    }
  },

  presentation: {
    get(req, res) {
      res.json(presentation.getPresentation());
      // TODO later: async access to DB:
      // users.get((err, results) => {
      //   if (err) { /* do something */ }
      //   res.json(results);
      // });
    },
    post(req, res) {
      // const params = [req.body.username];
      // models.users.post(params, (err, results) => {
      //   if (err) { /* do something */ }
      //   res.sendStatus(201);
      // });
    }
  }
};

