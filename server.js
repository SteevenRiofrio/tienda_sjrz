const express = require('express');
const app = express();

// Importar controladores
const categoriaController = require('./controllers/categoriaController');
const subcategoriaController = require('./controllers/subcategoriaController');
const productoController = require('./controllers/productoController');

app.use(express.json());

// ENDPOINT COMPLEJO OBLIGATORIO - DEBE IR PRIMERO
app.get('/api/productos/detallado', productoController.getDetallado);

// ========== RUTAS CATEGORÍAS ==========
app.get('/api/categorias', categoriaController.getAll);
app.get('/api/categorias/:id', categoriaController.getById);
app.post('/api/categorias', categoriaController.create);
app.put('/api/categorias/:id', categoriaController.update);
app.delete('/api/categorias/:id', categoriaController.delete);

// ========== RUTAS SUBCATEGORÍAS ==========
app.get('/api/subcategorias', subcategoriaController.getAll);
app.get('/api/subcategorias/:id', subcategoriaController.getById);
app.post('/api/subcategorias', subcategoriaController.create);
app.put('/api/subcategorias/:id', subcategoriaController.update);
app.delete('/api/subcategorias/:id', subcategoriaController.delete);

// ========== RUTAS PRODUCTOS ==========
app.get('/api/productos', productoController.getAll);
app.get('/api/productos/:id', productoController.getById);
app.post('/api/productos', productoController.create);
app.put('/api/productos/:id', productoController.update);
app.delete('/api/productos/:id', productoController.delete);

app.listen(3000, () => {
    console.log('✅ Servidor MVC en http://localhost:3000');
    console.log('🎯 Endpoint complejo: GET /api/productos/detallado');
});

module.exports = app;