var express = require('express');
var router = express.Router();
var fs= require('fs')
var b=0
/* GET home page. */
router.get('/we', function(req, res, next) {
  fs.readFile('index.jade', function (err,data) {
    b++
    res.render('index', { a: b });
  fs.writeFile('public/gyl.txt','访问页面'+b+'次', function () {

  })
  })

});

module.exports = router;
