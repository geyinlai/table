var express = require('express');
var router = express.Router();
var fs = require('fs')

/* GET home page. */
//router.get('/', function (req, res, next) {
//    fs.readFile('public/gyl.txt', 'utf-8', function (err, data) {
//        var num = parseInt(data.split('：')[1]) + 1;
//        fs.writeFile('public/gyl.txt', '访问页面：' + num, function (err) {
//
//            res.render('index', {
//                title: data
//            });
//        })
//    })
//
//});







router.post('/ll', function (req, res, next) {
    res.header('Access-Control-Allow-Origin','*')
    var temp=[]
    switch(req.body.abc){
        case '1':
            temp=['1','2','3']
            break;
        case '2':
            temp=['4','5','6']
            break;


    }

    res.send({'name':temp})

});
router.post('/abc', function (req, res, next) {

})

module.exports = router;
