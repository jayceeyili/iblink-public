// ««««««««« modules »»»»»»»»»
const dotenv = require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const socketServer = require('./socketServer');
const mustacheExpress = require('mustache-express');  // Logic-less {{mustache}} templates


// ««««««««« configuration »»»»»»»»»

// Middleware
// const webpack = require('webpack');
// const webpackDevMiddleware = require('webpack-dev-middleware');
// // const webpackHotMiddleware = require('webpack-hot-middleware');
// const webpackConfig = require('../webpack.config');

// Router
const router = require('./routes.js');

// Web server
const app = express();
const port = process.env.PORT || 3000;

// Mustache templates for dynamic html pages
const engine = app.engine('html', mustacheExpress());          // register file extension mustache, engine has cache!
app.set('view engine', 'html');                 // register file extension for partials
app.set('views', `${__dirname}/../client/html`);
// app.set('views', path.join(__dirname, '../client/html'));

// Parsing
app.use(bodyParser.json());
app.use(bodyParser.json({ entended: true }));


// ----- Setup routes ------
app.use('/', router);
app.use(express.static(path.join(__dirname, '../client/public')));

// DEBUG!
require('./models/presentation').getAllPresentations('0', (err, result) => {
  if (err) {
    console.error('Error in test of getAllPresentations', err);
  } else {
    console.log('Success in getAllPresentations, getting:', result);
  }
});  // TODO: remove, just for testing

// For testing purposes. TODO: Move to live presentation creation logic!
// require('./models/channel').getNewChannel();

// Use this middleware to set up hot module reloading via webpack.
// const compiler = webpack(webpackConfig);
// app.use(webpackDevMiddleware(compiler, { noInfo: true, publicPath: webpackConfig.output.publicPath }));
// app.use(webpackHotMiddleware(compiler))


// ««««««««« start app »»»»»»»»»
const webServer = app.listen(port, () => {
  console.log(`iBlink app is listening at port:  ${port}`);
});
socketServer(webServer);

exports = module.exports = app;
