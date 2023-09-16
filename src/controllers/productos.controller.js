
import { Productos } from '../models/productos.js';

export async function getProductos(req, res) {
    try {
        const productos = await Productos.findAll();
        res.json(productos);

    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
};

export async function createProducto(req, res) {
    const { nombre, precio_unitario, categoriaId, usuarioId } = req.body;
    try {
        const newProducto = await Productos.create({
            nombre,
            precio_unitario,
            categoriaId,
            usuarioId
        },

        );

        return res.json(newProducto);
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
};

export async function getProducto(req, res) {
    const { id } = req.params;
    try {
        const producto = await Productos.findOne({ where: { id } });
        return res.json(producto);
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
};

export async function updateProducto(req, res) {
    const { id } = req.params;
    const { nombre, precio_unitario, estado, categoriaId, usuarioId } = req.body;
    try {
        const producto = await Productos.findByPk(id);
        producto.nombre = nombre;
        producto.precio_unitario = precio_unitario;
        producto.estado = estado;
        producto.categoriaId = categoriaId;
        producto.usuarioId = usuarioId;

        await producto.save();
        return res.json(producto);
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
};

export async function deleteProducto(req, res) {
    const { id } = req.params;
    try {
        const producto = await Productos.destroy({ where: { id } });
        return res.sendStatus(204);
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}