
import {Categorias} from '../models/categorias.js';
import {Productos} from '../models/productos.js';

export async function getCategorias(req, res) {
    try {
        const categorias=await Categorias.findAll();
        res.json(categorias);
        
    } catch (error) {
        res.status(500).json({
            message:error.message
        })
    }
};

export async function createCategoria(req,res){
    const {nombre,usuarioId}= req.body;
    try {
        const newCategoria= await Categorias.create({
            nombre,
            usuarioId
        },
        {
            fields:['nombre','usuario_id'],
        }
        );

        return res.json(newCategoria);
    } catch (error) {
        res.status(500).json({
            message:error.message
        })
    }
};

export async function getCategoria(req, res) {
    const {id}=req.params;
    try {
        const categoria=await Categorias.findOne({where:{id}});
        return res.json(categoria);  
    } catch (error) {
        res.status(500).json({
            message:error.message
        })
    }
};

export async function updateCategoria(req,res){
    const {id}=req.params;
    const {nombre,usuarioId}= req.body;
    try {
        const categoria=await Categorias.findByPk(id);
        categoria.nombre=nombre;
        categoria.usuarioId=usuarioId;

        await categoria.save();
        return res.json(categoria);  
    } catch (error) {
        res.status(500).json({
            message:error.message
        })
    }
};

export async function deleteCategoria(req,res){
    const {id}=req.params;
    try {
        const categoria=await Categorias.destroy({where:{id}});
        return res.sendStatus(204);  
    } catch (error) {
        res.status(500).json({
            message:error.message
        })
    }
}



//

export async function getCategoriaProducto(req, res) {
    const { id } = req.params;
    try {
        const productos = await Productos.findAll({ where: { categoriaId: id } });
        return res.json(productos);
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}