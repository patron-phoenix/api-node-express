import {Router} from 'express';
import {getUsuarios,createUsuarios,getUsuario,updateUsuario,deleteUsuario,getUserCategoria,getUserProducto} from '../controllers/usuarios.controller.js';

const router= Router();

//Routees

router.get('/', getUsuarios);

router.post('/',createUsuarios);

router.get('/:id',getUsuario);

router.put('/:id',updateUsuario);

router.delete('/:id',deleteUsuario);

//

router.get('/:id/cate',getUserCategoria);

router.get('/:id/prod',getUserProducto);



export default router;