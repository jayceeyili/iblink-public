const path = require('path');
const presentation = require('../models/presentation');

module.exports = {

  homepage: {
    get(req, res) {
      res.send(renderFullPage());
    }
  },

  channel: {
    get(req, res) {
      const localPath = req.params.id;
      console.log('In controller, res:', res);
      let channel;
      if (localPath && /^\d+$/.test(localPath)) {
        channel = localPath;
      } else {
        channel = '';
      }

      // Send the rendered page back to the client
      res.send(renderFullPage(channel));
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

function renderFullPage(channel) {
  return `<!doctype html>
    <html lang="en">
      <head>
        <meta charset="utf-8">
        <title>iBlink</title>
        <!--[if lt IE 9]>
          <script src="https://cdnjs.cloudflare.com/ajax/libs/html5shiv/3.7.3/html5shiv.js"></script>
        <![endif]-->
        <link rel="stylesheet" type="text/css" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
        <!-- for react-image-gallery... -->
        <link rel="stylesheet" type="text/css" href="${path.join(__dirname, '../client/public/styles/css/image-gallery.css')}">
      </head>
      <body>
        <div id="app"></div>
        <script> window.__CHANNEL__ = ${channel} </script>
        <script src="/static/bundle.js"></script>
      </body>
    </html>
    `;
}
