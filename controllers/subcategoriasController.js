const Subcategoria = require('../models/Subcategoria');

const subcategoriaController = {
    getAll: (req, res) => {
        Subcategoria.getAll((err, result) => {
            if (err) return res.status(500).json({ error: err.message });
            res.json(result);
        });
    },

    getById: (req, res) => {
        Subcategoria.getById(req.params.id, (err, result) => {
            if (err) return res.status(500).json({ error: err.message });
            if (result.length === 0) return res.status(404).json({ message: 'Subcategoría no encontrada' });
            res.json(result[0]);
        });
    },

    create: (req, res) => {
        Subcategoria.create(req.body, (err, result) => {
            if (err) return res.status(500).json({ error: err.message });
            res.status(201).json({ message: 'Subcategoría creada', id: result.insertId });
        });
    },

    update: (req, res) => {
        Subcategoria.update(req.params.id, req.body, (err, result) => {
            if (err) return res.status(500).json({ error: err.message });
            if (result.affectedRows === 0) return res.status(404).json({ message: 'Subcategoría no encontrada' });
            res.json({ message: 'Subcategoría actualizada' });
        });
    },

    delete: (req, res) => {
        Subcategoria.delete(req.params.id, (err, result) => {
            if (err) return res.status(500).json({ error: err.message });
            if (result.affectedRows === 0) return res.status(404).json({ message: 'Subcategoría no encontrada' });
            res.json({ message: 'Subcategoría eliminada' });
        });
    }
};

module.exports = subcategoriaController;