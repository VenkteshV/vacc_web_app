const express = require('express');
const router = express.Router();
const request = require('request-promise');
const bodyParser = require('body-parser');
const IncomingForm = require("formidable").IncomingForm;
const FormData = require('form-data');
const dbUtil = require('../utils/db_utils');

router.post("/formsubmit", function (req,res) {
    console.log("form submit route hit");
    dbUtil.putRegister();
    var formSbmitRes = {
        "success" : true
    }
    res.json(formSbmitRes);

});

module.exports = router;