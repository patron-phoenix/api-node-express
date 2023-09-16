import express from  'express';
import morgan from 'morgan';


const app=express();

//importar las rutas
import usuariosRoutes from './routers/usuarios_routes.js';
import categoriasRoutes from './routers/categoria_routes.js';
import productosRoutes from './routers/producto_routes.js';

//middlewares
app.use(morgan('dev'));
app.use(express.json());
//routers
app.use('/api/usuarios',usuariosRoutes);
app.use('/api/categorias',categoriasRoutes);
app.use('/api/productos',productosRoutes);

export default app;