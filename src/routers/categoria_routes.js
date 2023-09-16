import {Router} from 'express';
import {getCategorias,createCategoria,getCategoria,updateCategoria,deleteCategoria,getCategoriaProducto} from '../controllers/categorias.controller.js';

const router= Router();

//Routees
router.get('/',getCategorias);

router.post('/',createCategoria);

router.get('/:id',getCategoria);

router.put('/:id',updateCategoria);

router.delete('/:id',deleteCategoria);
//
router.get('/:id/prod',getCategoriaProducto);





export default router;