import {Sequelize} from 'sequelize';

export const sequelize= new Sequelize(
    'proyectonode', //data base
    'root', //username
    '',     //password
    {
        host: 'localhost',
        dialect:'mysql',
    }
);