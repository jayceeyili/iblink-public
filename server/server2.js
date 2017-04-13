// ««««««««« modules »»»»»»»»»
const dotenv = require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const socketServer = require('./socketServer');

// ««««««««« configuration »»»»»»»»»
// DB config comes here

const app = express();
const port = process.env.PORT || 3000;
app.use(bodyParser.json());
app.use(bodyParser.json({ entended: true }));

app.use(express.static(path.join(__dirname, '../client/public')));

// ««««««««« routes »»»»»»»»»
require('./routes')(app);
// app.use(handleRender);

function handleRender(req, res) {
  // Query our mock API asynchronously


  // Compile an initial state
  const preloadedState = 'LIVE_PRESENTATION';

  // Send the rendered page back to the client
  res.send(renderFullPage(preloadedState));
}

function renderFullPage(preloadedState) {
  return `<!doctype html>
    <html lang="en">
      <head>
        <meta charset="utf-8">
        <title>iBlink</title>
        <!--[if lt IE 9]>
          <script src="https://cdnjs.cloudflare.com/ajax/libs/html5shiv/3.7.3/html5shiv.js"></script>
        <![endif]-->
        <link rel="stylesheet" type="text/css" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
        <link rel="stylesheet" type="text/css" href="${path.join(__dirname, '../client/public/styles.css')}">
        <!-- for react-image-gallery -->
        <link rel="stylesheet" type="text/css" href="${path.join(__dirname, '../client/public/styles/css/image-gallery.css')}">
      </head>
      <body>
        <div id="app"></div>
        <script>
          window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(/</g, '\\x3c')}
        </script>
        <script type="text/javascript" src="${path.join(__dirname, '../client/public/dist/bundle.js')}"></script>
      </body>
    </html>
    `;
}


// ««««««««« start app »»»»»»»»»
const webServer = app.listen(port, () => {
  console.log(`iBlink app is listening at port:  ${port}`);
});
socketServer(webServer);

exports = module.exports = app;
