var express = require('express');
var router = express.Router();
var fs = require('fs')



var mysql      = require('mysql');
var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '220118'
});
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






//
//router.post('/ll', function (req, res, next) {
//    res.header('Access-Control-Allow-Origin','*')
//    var temp=[]
//    switch(req.body.abc){
//        case '1':
//            temp=['1','2','3']
//            break;
//        case '2':
//            temp=['4','5','6']
//            break;
//
//
//    }
//
//    res.send({'name':temp})
//
//});
//
//周考
//router.post('/public/ajax', function (req, res, next) {
//    res.header('Access-Control-Allow-Origin','*')
//
//    fs.readFile('public/gyl.txt', 'utf-8', function (err, data) {
//        var h1=h1.value
//        var p= p.value
//        fs.writeFile('public/gyl.txt',h1 + p, function (err) {
//            var h1=  data.split('')
//            var p=data.split('')
//
//        })
//    })
//
//
//    res.send({date:h1})
//
//});



























//
//router.post('/ll', function (req, res, next) {
//    fs.readFile('public/gyl.txt', 'utf-8', function (err, data) {
//
//        fs.writeFile('public/gyl.txt', '访问页面：' + num, function (err) {
//
//            res.render('index', {
//                title: data
//            });
//        })
//    })
//
//});
//
//
//router.post('/abc', function (req, res, next) {
//
//})






router.get('/', function(req, res, next) {
    connection.connect();

    connection.query('SELECT * FROM sheet.gyl', function(err, rows, fields) {
        res.header('Access-Control-Allow-Origin',"*")
        res.send(rows)

    });

    connection.end();


});

module.exports = router;











