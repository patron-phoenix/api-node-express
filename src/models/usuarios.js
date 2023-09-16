import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";
import { Categorias } from "./categorias.js";
import { Productos } from "./productos.js";

export const Usuarios = sequelize.define(
    'usuarios',
    {
        id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
        nombre: { type: DataTypes.STRING },
        correo: { type: DataTypes.STRING },
        contrasena: { type: DataTypes.STRING },
        estado: { type: DataTypes.BOOLEAN, defaultValue: true },
        
    },
    {timestamps: false},
);

Usuarios.hasMany(Categorias, {
    foreignkey: 'usuario_id',
    sourceKey: 'id'
});

Categorias.belongsTo(Usuarios, {
    foreignkey: 'usuario_id',
    targetkey: 'id'
});

Usuarios.hasMany(Productos, {
    foreignkey: 'usuario_id',
    sourceKey: 'id'
});

Productos.belongsTo(Usuarios, {
    foreignkey: 'usuario_id',
    targetkey: 'id'
});