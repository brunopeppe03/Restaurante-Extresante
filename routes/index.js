var conn = require('./../inc/db');
var express = require('express');
var menus = require('./../inc/menus');
var reservations = require('./../inc/reservations');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {

    menus.getMenus().then(results =>{

      res.render('index', { 
        title: 'Restaurante Saboroso!',
        menus: results,
        isHome: true
      });

    });

});

router.get('/contacts', function(req, res, next){

  contacts.render(req, res);

    res.render('contacts',{
      title: 'Contato - Restaurante Saboroso!',
      backgroud: 'images/img_bg_3.jpg',
      h1: 'Diga um oi!',
      menus: results
  
    });


  });


  router.post('/contacts', function(req, res, next){

    console.log(req.body);

    if(!req,body.name) {
      contacts.render(req, res, "Digite o nome")
    }else if(!req,body.email) {
      contacts.render(req, res, "Digite o email")

    }else if(!req,body.message) {
      contacts.render(req, res, "Digite a menssagem")

    }else{

    contacts.save(req.body).then(results => {

      req.body = {};

      contacts.render(req, res, null, "Contato enviado com sucesso");


    }).catch(err=>{

      contacts.render(req, res. err.message);

    });

  } 

});

router.get('/reservations', function(req, res, next){

  reservations.render(req, res);

  res.render('reservations',{
    title: 'Reservas - Restaurante Saboroso!',
    backgroud: 'images/img_bg_2.jpg',
    h1: 'Reserve uma mesa!'
  });

});

router.post('/reservations', function(req, res, next){

  if (!req, body.name){
 reservations.render(req, res,"Digite o nome" );
  } else if (!req, body.email){
    reservations.render(req, res,"Digite o e-mail");
  }else if (!req, body.people){
    reservations.render(req, res,"Selecione o numero de pessoas" );
  }else if (!req, body.date){
    reservations.render(req, res,"Selecione a data" );
  }else if (!req, body.time){
    reservations.render(req, res,"Selecione a hora" );
  }else{

   reservations.save(req.body).then(results => {

    reservations.render(req, res, null, "reserva realizada com sucesso" );

   }).catch(err=>{

    reservations.render(req, res, err.message);

   });

  }

});

router.get('/services', function(req, res, next){

  res.render('services',{
    title: 'Contato - Restaurante Saboroso!',
    backgroud: 'images/img_bg_1.jpg',
    h1: 'E um prazer poder servir!'
  });

});




module.exports = router;
