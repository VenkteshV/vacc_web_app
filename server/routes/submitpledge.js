const express = require('express');
const router = express.Router();
const dbUtil = require('../utils/db_utils');
const { formLimiter } = require('../utils/limiters');

router.post("/submitpledge", formLimiter, async function (req,res) {
    console.log("form submit route hit");
    try {
        const { name, phone_no, pin_code } = req.body;

        console.log(req.body);
        const { result, msg } = await dbUtil.putRegister(name, phone_no, pin_code);
        res.json({
            "success" : result,
            "msg": msg
        });
    } catch (error) {
        
    }


});

module.exports = router;