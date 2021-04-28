const express = require('express');
const router = express.Router();
const dbUtil = require('../utils/db_utils');


router.get("/getcount", function (req,res) {
    console.log("get count route hit");
    var countResponse = {
        "count" : dbUtil.getRegisterCount()
    }
    res.json(countResponse);

});

module.exports = router;