const Producto = require('../models/Producto');

const productoController = {
    getAll: (req, res) => {
        Producto.getAll((err, result) => {
            if (err) return res.status(500).json({ error: err.message });
            res.json(result);
        });
    },

    getById: (req, res) => {
        Producto.getById(req.params.id, (err, result) => {
            if (err) return res.status(500).json({ error: err.message });
            if (result.length === 0) return res.status(404).json({ message: 'Producto no encontrado' });
            res.json(result[0]);
        });
    },

    create: (req, res) => {
        Producto.create(req.body, (err, result) => {
            if (err) return res.status(500).json({ error: err.message });
            res.status(201).json({ message: 'Producto creado', id: result.insertId });
        });
    },

    update: (req, res) => {
        Producto.update(req.params.id, req.body, (err, result) => {
            if (err) return res.status(500).json({ error: err.message });
            if (result.affectedRows === 0) return res.status(404).json({ message: 'Producto no encontrado' });
            res.json({ message: 'Producto actualizado' });
        });
    },

    delete: (req, res) => {
        Producto.delete(req.params.id, (err, result) => {
            if (err) return res.status(500).json({ error: err.message });
            if (result.affectedRows === 0) return res.status(404).json({ message: 'Producto no encontrado' });
            res.json({ message: 'Producto eliminado' });
        });
    },

    getDetallado: (req, res) => {
        Producto.getDetallado((err, result) => {
            if (err) return res.status(500).json({ error: err.message });
            res.json(result);
        });
    }
};

module.exports = productoController;