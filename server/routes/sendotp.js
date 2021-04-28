const express = require('express');
const router = express.Router();
const smsUtil = require('../utils/sms_utils');


router.get("/sendotp", function (req,res) {
    console.log("send sms route hit");
    smsUtil.sendOTP();
    var smsSendResponse = {
        "success" : true
    };
    res.json(smsSendResponse);

});

module.exports = router;