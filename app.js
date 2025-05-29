const express = require('express');
const cors = require('cors');
require('dotenv').config();

// Importar controladores directamente
const categoriasController = require('./controllers/categoriasController');
const subcategoriasController = require('./controllers/subcategoriasController');
const productosController = require('./controllers/productosController');

const app = express();
const PORT = process.env.PORT || 3000;

// Middlewares
app.use(express.json());
app.use(cors());

// Ruta de prueba
app.get('/', (req, res) => {
    res.json({ 
        message: 'API Tienda SJRZ funcionando correctamente',
        endpoints: [
            'GET /api/categorias',
            'GET /api/subcategorias', 
            'GET /api/productos',
            'GET /api/productos/detallado'
        ]
    });
});

// ENDPOINT COMPLEJO OBLIGATORIO - DEBE IR PRIMERO
app.get('/api/productos/detallado', productosController.getDetallado);

// Rutas para Categorías
app.get('/api/categorias', categoriasController.getAll);
app.get('/api/categorias/:id', categoriasController.getById);
app.post('/api/categorias', categoriasController.create);
app.put('/api/categorias/:id', categoriasController.update);
app.delete('/api/categorias/:id', categoriasController.delete);

// Rutas para Subcategorías
app.get('/api/subcategorias', subcategoriasController.getAll);
app.get('/api/subcategorias/:id', subcategoriasController.getById);
app.post('/api/subcategorias', subcategoriasController.create);
app.put('/api/subcategorias/:id', subcategoriasController.update);
app.delete('/api/subcategorias/:id', subcategoriasController.delete);

// Rutas para Productos
app.get('/api/productos', productosController.getAll);
app.post('/api/productos', productosController.create);
app.get('/api/productos/:id', productosController.getById);
app.put('/api/productos/:id', productosController.update);
app.delete('/api/productos/:id', productosController.delete);

// Manejo de errores 404
app.use('*', (req, res) => {
    res.status(404).json({ message: 'Endpoint no encontrado' });
});

// Iniciar servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
    console.log('Endpoints disponibles:');
    console.log('- GET /api/categorias');
    console.log('- GET /api/subcategorias');
    console.log('- GET /api/productos');
    console.log('- GET /api/productos/detallado');
});

module.exports = app;