const express = require('express');
const router = express.Router();
const smsUtil = require('../utils/sms_utils');


router.get("/verifyotp", function (req,res) {
    console.log("verify sms route hit");
    smsUtil.verifyOTP();
    var smsVerifyResponse = {
        "success" : true
    };
    res.json(smsVerifyResponse);

});

module.exports = router;