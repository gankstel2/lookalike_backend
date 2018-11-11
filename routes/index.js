/**
 * Created by patipan on 03/08/2018 
 */

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'LOOK A LIKE API' });
});


module.exports =  router;
