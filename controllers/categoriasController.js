const pool = require('../config/database');

const categoriasController = {
    // GET - Obtener todas las categorías
    getAll: async (req, res) => {
        try {
            const [rows] = await pool.execute('SELECT * FROM Categorias');
            res.json(rows);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    // GET - Obtener categoría por ID
    getById: async (req, res) => {
        try {
            const [rows] = await pool.execute('SELECT * FROM Categorias WHERE Id = ?', [req.params.id]);
            if (rows.length === 0) {
                return res.status(404).json({ message: 'Categoría no encontrada' });
            }
            res.json(rows[0]);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    // POST - Crear nueva categoría
    create: async (req, res) => {
        try {
            const { Nombre } = req.body;
            const [result] = await pool.execute('INSERT INTO Categorias (Nombre) VALUES (?)', [Nombre]);
            res.status(201).json({ 
                message: 'Categoría creada exitosamente', 
                id: result.insertId 
            });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    // PUT - Actualizar categoría
    update: async (req, res) => {
        try {
            const { Nombre } = req.body;
            const [result] = await pool.execute('UPDATE Categorias SET Nombre = ? WHERE Id = ?', [Nombre, req.params.id]);
            if (result.affectedRows === 0) {
                return res.status(404).json({ message: 'Categoría no encontrada' });
            }
            res.json({ message: 'Categoría actualizada exitosamente' });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    // DELETE - Eliminar categoría
    delete: async (req, res) => {
        try {
            const [result] = await pool.execute('DELETE FROM Categorias WHERE Id = ?', [req.params.id]);
            if (result.affectedRows === 0) {
                return res.status(404).json({ message: 'Categoría no encontrada' });
            }
            res.json({ message: 'Categoría eliminada exitosamente' });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
};

module.exports = categoriasController;