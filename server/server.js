'use strict';
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const api_route = require('./routes/recommend');

const submit_pledge_route = require('./routes/submitpledge');
const submit_excuse_route = require('./routes/submitexcuse');
const get_progress_route = require('./routes/getprogress');
const send_otp_route = require('./routes/sendotp');
const verify_otp_route = require('./routes/verifyotp');

const path = require('path');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static('dist'));

app.get('/', function (request, response) {
  response.redirect('index.html');
});
const port = process.env.PORT || 80;
app.listen(port, function () {
  console.log(`Application listening on port ${port}`);
});


app.use(submit_pledge_route);

app.use(submit_excuse_route);

app.use(get_progress_route);

app.use(send_otp_route);

app.use(verify_otp_route);

module.exports = app;
