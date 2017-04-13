const path = require('path');

const presentation = require('./models/presentation.js');

module.exports = function (app) {
  // ««««««««« server routes »»»»»»»»»
  let maxSlide = 0;


  // ««««««««« User routes »»»»»»»»»
  app.get('/', renderPage);
  app.get(/^\d+$/, renderPage);

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


// ======= Dynamic page rendering ========

function renderPage(req, res) {
  // Query our mock API asynchronously
  // const channel = '/\d+/';
  const localPath = req.params[0];
  let channel;
  if (localPath && /^\d+$/.test(localPath)) {
    channel = localPath;
  } else {
    channel = '';
  }

  // Send the rendered page back to the client
  res.send(renderFullPage(channel));
}

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
