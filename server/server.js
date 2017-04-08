// ««««««««« modules »»»»»»»»»
const dotenv = require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

// ««««««««« configuration »»»»»»»»»
// DB config comes here

const app = express();
const port = process.env.PORT || 3000;
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../client/public')));
app.use(bodyParser.json({ entended: true }));

// ««««««««« routes »»»»»»»»»
require('./routes')(app);

// ««««««««« start app »»»»»»»»»
app.listen(port, () => {
  console.log(`App is listening at port:  ${ port }`);
});

exports = module.exports = app;
