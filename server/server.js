'use strict';
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const api_route = require('./routes/recommend');

const form_submit_route = require('./routes/formsubmit');
const get_count_route = require('./routes/getcount');
const send_otp_route = require('./routes/sendotp');
const verify_otp_route = require('./routes/verifyotp');

const path = require('path');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static('dist'));
/* istanbul ignore next */
app.get('/', function (request, response) {
/* istanbul ignore next */
  response.redirect('index.html');
});
/* istanbul ignore next */
const port = process.env.PORT || 80;
app.listen(port, function () {
  console.log(`Application listening on port ${port}`);
});

app.use('/recommend_taxonomy', api_route);

app.use(form_submit_route);

app.use(get_count_route);

app.use(send_otp_route);

app.use(verify_otp_route);

module.exports = app;
