const express = require('express');
const router = express.Router();

// Importar controladores
const categoriasController = require('../controllers/categoriasController');
const subcategoriasController = require('../controllers/subcategoriasController');
const productosController = require('../controllers/productosController');

// IMPORTANTE: El endpoint específico /detallado debe ir PRIMERO
router.get('/api/productos/detallado', productosController.getDetallado);

// Rutas para Categorías
router.get('/api/categorias', categoriasController.getAll);
router.get('/api/categorias/:id', categoriasController.getById);
router.post('/api/categorias', categoriasController.create);
router.put('/api/categorias/:id', categoriasController.update);
router.delete('/api/categorias/:id', categoriasController.delete);

// Rutas para Subcategorías
router.get('/api/subcategorias', subcategoriasController.getAll);
router.get('/api/subcategorias/:id', subcategoriasController.getById);
router.post('/api/subcategorias', subcategoriasController.create);
router.put('/api/subcategorias/:id', subcategoriasController.update);
router.delete('/api/subcategorias/:id', subcategoriasController.delete);

// Rutas para Productos (las rutas con parámetros van al final)
router.get('/api/productos', productosController.getAll);
router.post('/api/productos', productosController.create);
router.get('/api/productos/:id', productosController.getById);
router.put('/api/productos/:id', productosController.update);
router.delete('/api/productos/:id', productosController.delete);

module.exports = router;