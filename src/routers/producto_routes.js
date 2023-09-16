import {Router} from 'express';
import {getProductos,createProducto,getProducto,updateProducto,deleteProducto} from '../controllers/productos.controller.js';

const router= Router();

//Routees
router.get('/',getProductos);

router.post('/',createProducto);

router.get('/:id',getProducto);

router.put('/:id',updateProducto);

router.delete('/:id',deleteProducto);


export default router;