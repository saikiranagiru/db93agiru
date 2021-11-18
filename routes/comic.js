var express = require('express'); 
const costume_controlers= require('../controller/costume'); 
var router = express.Router(); 
 
/* GET costumes */ 
router.get('/', costume_controlers.costume_view_all_Page ); 

router.get('/detail', costume_controlers.costume_view_one_Page); 

router.get('/create', costume_controlers.costume_create_Page); 
 
router.get('/update', costume_controlers.costume_update_Page);

router.get('/delete', costume_controlers.costume_delete_Page); 

module.exports = router; 

