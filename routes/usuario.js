const {Router}=require('express');
const router=Router();
const { getUsuario, postUsuario, putUsuario, pathUsuario, deleteUsuario } = require('../controllers/usuario.controler');


router.get('/',getUsuario);
router.post('/',postUsuario);
router.put('/',putUsuario);
router.patch('/',pathUsuario);
router.delete('/',deleteUsuario);


module.exports=router;

