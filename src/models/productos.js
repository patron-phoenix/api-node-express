import { DataTypes } from "sequelize";
import {  sequelize } from "../database/database.js";

export const Productos=sequelize.define(
    'productos',
    {
        id:{type:DataTypes.INTEGER, primaryKey:true,autoIncrement:true},
        nombre:{type:DataTypes.STRING},
        precio_unitario:{type:DataTypes.INTEGER},
        estado:{type:DataTypes.BOOLEAN,defaultValue:true},
    },
    {timestamps: false},
);