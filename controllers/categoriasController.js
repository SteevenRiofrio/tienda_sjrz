const Categoria = require('../models/Categoria');

const categoriaController = {
    getAll: (req, res) => {
        Categoria.getAll((err, result) => {
            if (err) return res.status(500).json({ error: err.message });
            res.json(result);
        });
    },

    getById: (req, res) => {
        Categoria.getById(req.params.id, (err, result) => {
            if (err) return res.status(500).json({ error: err.message });
            if (result.length === 0) return res.status(404).json({ message: 'Categoría no encontrada' });
            res.json(result[0]);
        });
    },

    create: (req, res) => {
        Categoria.create(req.body, (err, result) => {
            if (err) return res.status(500).json({ error: err.message });
            res.status(201).json({ message: 'Categoría creada', id: result.insertId });
        });
    },

    update: (req, res) => {
        Categoria.update(req.params.id, req.body, (err, result) => {
            if (err) return res.status(500).json({ error: err.message });
            if (result.affectedRows === 0) return res.status(404).json({ message: 'Categoría no encontrada' });
            res.json({ message: 'Categoría actualizada' });
        });
    },

    delete: (req, res) => {
        Categoria.delete(req.params.id, (err, result) => {
            if (err) return res.status(500).json({ error: err.message });
            if (result.affectedRows === 0) return res.status(404).json({ message: 'Categoría no encontrada' });
            res.json({ message: 'Categoría eliminada' });
        });
    }
};

module.exports = categoriaController;