import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";
import { Productos } from "./productos.js";



export const Categorias=sequelize.define(
    'categorias',
    {
        id:{type:DataTypes.INTEGER, primaryKey:true,autoIncrement:true},
        nombre:{type:DataTypes.STRING},
        
    },
    {timestamps: false},
);


Categorias.hasMany(Productos, {
    foreignkey: 'categoria_id',
    sourceKey: 'id'
});

Productos.belongsTo(Categorias, {
    foreignkey: 'categoria_id',
    targetkey: 'id'
});
