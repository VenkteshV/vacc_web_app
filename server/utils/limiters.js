const rateLimit  = require("express-rate-limit");

const rootLimiter = rateLimit({
    windowMs : 1 * 60 * 1000, // 1 minute
    max: 50 // max 10 per windowMs
});

const apiLimiter = rateLimit({
    windowMs : 2 * 60 * 1000, // 2 minute
    max: 15 // max 15 per windowMs
});

const formLimiter = rateLimit({
    windowMs : 10 * 60 * 1000, // 10 minute
    max: 10
})

module.exports = { rootLimiter, apiLimiter, formLimiter };