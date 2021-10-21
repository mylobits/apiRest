const {Router}=require('express');
const bodyParser = require('body-parser');
const router=Router();
const { getUsuario, postUsuario, putUsuario, pathUsuario, deleteUsuario } = require('../controllers/usuario.controler');
const jsonParser = bodyParser.json();

router.get('/',getUsuario);
router.post('/', jsonParser, postUsuario);
router.put('/',putUsuario);
router.patch('/',pathUsuario);
router.delete('/',deleteUsuario);


module.exports=router;

