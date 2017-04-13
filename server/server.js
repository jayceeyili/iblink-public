// ««««««««« modules »»»»»»»»»
const dotenv = require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const socketServer = require('./socketServer');

const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
// const webpackHotMiddleware = require('webpack-hot-middleware');
const webpackConfig = require('../webpack.config');

// ««««««««« configuration »»»»»»»»»
// DB config comes here

const app = express();
const port = process.env.PORT || 3000;
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../client/public')));
app.use(bodyParser.json({ entended: true }));

// Use this middleware to set up hot module reloading via webpack.
const compiler = webpack(webpackConfig);
app.use(webpackDevMiddleware(compiler, { noInfo: true, publicPath: webpackConfig.output.publicPath }));
// app.use(webpackHotMiddleware(compiler))

// ««««««««« routes »»»»»»»»»
app.use(handleRender);

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
        <!-- for react-image-gallery -->
        <link rel="stylesheet" type="text/css" href="${path.join(__dirname, '../client/public/styles/css/image-gallery.css')}">
      </head>
      <body>
        <div id="app"></div>
        <script src="/static/bundle.js"></script>
      </body>
    </html>
    `;
}

        // <script>
        //   window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(/</g, '\\x3c')}
        // </script>

// require('./routes')(app);

// ««««««««« start app »»»»»»»»»
const webServer = app.listen(port, () => {
  console.log(`iBlink app is listening at port:  ${port}`);
});
socketServer(webServer);

exports = module.exports = app;
