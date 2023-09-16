import { Usuarios } from '../models/usuarios.js';
import { Categorias } from '../models/categorias.js';
import { Productos } from '../models/productos.js';




export async function getUsuarios(req, res) {

    try {
        const usuarios = await Usuarios.findAll();
        res.json(usuarios);

    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
};

export async function createUsuarios(req, res) {
    const { nombre, correo, contrasena } = req.body;
    try {
        const newUsuario = await Usuarios.create({
            nombre,
            correo,
            contrasena,
        },
            {
                fields: ['nombre', 'correo', 'contrasena'],
            }
        );

        return res.json(newUsuario);
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
};

export async function getUsuario(req, res) {
    const { id } = req.params;
    try {
        const usuario = await Usuarios.findOne({ where: { id } });
        return res.json(usuario);
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
};

export async function updateUsuario(req, res) {
    const { id } = req.params;
    const { nombre, correo, contrasena, estado } = req.body;
    try {
        const usuario = await Usuarios.findByPk(id);
        usuario.nombre = nombre;
        usuario.correo = correo;
        usuario.contrasena = contrasena;
        usuario.estado = estado;

        await usuario.save();
        return res.json(usuario);
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
};

export async function deleteUsuario(req, res) {
    const { id } = req.params;
    try {
        await Categorias.destroy({ where: { usuario_id: id } })
        const usuario = await Usuarios.destroy({ where: { id } });
        return res.sendStatus(204);
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}

//

export async function getUserCategoria(req, res) {
    const { id } = req.params;
    try {
        const categorias = await Categorias.findAll({ where: { usuarioId: id } });
        return res.json(categorias);
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}

export async function getUserProducto(req, res) {
    const { id } = req.params;
    try {
        const productos = await Productos.findAll({ where: { usuarioId: id } });
        return res.json(productos);
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}


