const express = require('express');
const router = express.Router();
const dbUtil = require('../utils/db_utils');

router.post("/submitexcuse", async function (req,res) {
    console.log("form submit excuse route hit");
    const { excuse } = req.body;
    console.log(req.body);

    try {
        const { result, msg } = await dbUtil.putExcuse(excuse);
        
        res.json( {
            "success" : result,
            "msg": msg
        });
        
    } catch (error) {
        console.log(error);
        res.json( {
            "success" : false,
            "msg": "error during submit excuse"
        });
    }

});

module.exports = router;