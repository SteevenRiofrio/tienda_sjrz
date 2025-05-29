const pool = require('../config/database');

const subcategoriasController = {
    // GET - Obtener todas las subcategorías
    getAll: async (req, res) => {
        try {
            const [rows] = await pool.execute(`
                SELECT s.Id, s.Nombre, s.CategoriaId, c.Nombre as CategoriaNombre 
                FROM Subcategorias s 
                JOIN Categorias c ON s.CategoriaId = c.Id
            `);
            res.json(rows);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    // GET - Obtener subcategoría por ID
    getById: async (req, res) => {
        try {
            const [rows] = await pool.execute(`
                SELECT s.Id, s.Nombre, s.CategoriaId, c.Nombre as CategoriaNombre 
                FROM Subcategorias s 
                JOIN Categorias c ON s.CategoriaId = c.Id 
                WHERE s.Id = ?
            `, [req.params.id]);
            if (rows.length === 0) {
                return res.status(404).json({ message: 'Subcategoría no encontrada' });
            }
            res.json(rows[0]);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    // POST - Crear nueva subcategoría
    create: async (req, res) => {
        try {
            const { Nombre, CategoriaId } = req.body;
            const [result] = await pool.execute('INSERT INTO Subcategorias (Nombre, CategoriaId) VALUES (?, ?)', [Nombre, CategoriaId]);
            res.status(201).json({ 
                message: 'Subcategoría creada exitosamente', 
                id: result.insertId 
            });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    // PUT - Actualizar subcategoría
    update: async (req, res) => {
        try {
            const { Nombre, CategoriaId } = req.body;
            const [result] = await pool.execute('UPDATE Subcategorias SET Nombre = ?, CategoriaId = ? WHERE Id = ?', [Nombre, CategoriaId, req.params.id]);
            if (result.affectedRows === 0) {
                return res.status(404).json({ message: 'Subcategoría no encontrada' });
            }
            res.json({ message: 'Subcategoría actualizada exitosamente' });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    // DELETE - Eliminar subcategoría
    delete: async (req, res) => {
        try {
            const [result] = await pool.execute('DELETE FROM Subcategorias WHERE Id = ?', [req.params.id]);
            if (result.affectedRows === 0) {
                return res.status(404).json({ message: 'Subcategoría no encontrada' });
            }
            res.json({ message: 'Subcategoría eliminada exitosamente' });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
};

module.exports = subcategoriasController;