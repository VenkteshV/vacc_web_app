const express = require('express');
const router = express.Router();
const dbUtil = require('../utils/db_utils');
const { apiLimiter } = require('../utils/limiters');

router.get("/getprogress", apiLimiter, async function (req,res) {
    try {
        console.log("get progress route hit");
        const theCount = await dbUtil.getRegisterCount();
        const thePeople = await dbUtil.getRecentRegisterPeople();
        var countResponse = {
            "success": true,
            "count" : theCount,
            "recents" : thePeople

        }
        res.json(countResponse);
        
    } catch (error) {
        res.json({"fail":true});
    }

});

module.exports = router;