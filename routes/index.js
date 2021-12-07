var conn = require('./../inc/db');
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {

  conn.query(`
    SELECT * FROM tb menus ORDEM BY title
    
  `
  , (err, results)=>{

    if (err) {
      console.log(err);
    }

    res.render('index', { 
      title: 'Restaurante Saboroso!',
      menus: results
    });
    

  });

});

router.get('/contacts', function(req, res, next){

  res.render('contacts');



});

router.get('/menus', function(req, res, next){

  res.render('menus');



});

router.get('/reservations', function(req, res, next){

  res.render('reservations');



});

router.get('/services', function(req, res, next){

  res.render('services');



});


module.exports = router;
