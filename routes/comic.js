var express = require('express'); 
const costume_controlers= require('../controller/costume'); 
const secured = (req, res, next) => { 
    if (req.user){ 
      return next(); 
    } 
    req.session.returnTo = req.originalUrl; 
    res.redirect("/login"); 
  }

var router = express.Router(); 
 
/* GET costumes */ 
router.get('/', costume_controlers.costume_view_all_Page ); 

router.get('/detail', costume_controlers.costume_view_one_Page); 

router.get('/create', secured,costume_controlers.costume_create_Page); 
 
router.get('/update', secured,costume_controlers.costume_update_Page);

router.get('/delete', secured,costume_controlers.costume_delete_Page); 

module.exports = router; 

