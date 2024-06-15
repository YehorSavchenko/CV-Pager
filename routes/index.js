var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res) {
    res.locals.req = req;
    res.render('index', {intro: "#top", about: "#about", portfolio: "#portfolio"});
});

module.exports = router;
