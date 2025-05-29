const pool = require('../config/database');

const productosController = {
    // GET - Obtener todos los productos
    getAll: async (req, res) => {
        try {
            const [rows] = await pool.execute(`
                SELECT p.Id, p.Nombre, p.Precio, p.Stock, p.SubcategoriaId, p.FechaIngreso,
                       s.Nombre as SubcategoriaNombre, c.Nombre as CategoriaNombre
                FROM Productos p 
                JOIN Subcategorias s ON p.SubcategoriaId = s.Id
                JOIN Categorias c ON s.CategoriaId = c.Id
            `);
            res.json(rows);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    // GET - Obtener producto por ID
    getById: async (req, res) => {
        try {
            const [rows] = await pool.execute(`
                SELECT p.Id, p.Nombre, p.Precio, p.Stock, p.SubcategoriaId, p.FechaIngreso,
                       s.Nombre as SubcategoriaNombre, c.Nombre as CategoriaNombre
                FROM Productos p 
                JOIN Subcategorias s ON p.SubcategoriaId = s.Id
                JOIN Categorias c ON s.CategoriaId = c.Id
                WHERE p.Id = ?
            `, [req.params.id]);
            if (rows.length === 0) {
                return res.status(404).json({ message: 'Producto no encontrado' });
            }
            res.json(rows[0]);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    // POST - Crear nuevo producto
    create: async (req, res) => {
        try {
            const { Nombre, Precio, Stock, SubcategoriaId } = req.body;
            const [result] = await pool.execute(
                'INSERT INTO Productos (Nombre, Precio, Stock, SubcategoriaId) VALUES (?, ?, ?, ?)', 
                [Nombre, Precio, Stock, SubcategoriaId]
            );
            res.status(201).json({ 
                message: 'Producto creado exitosamente', 
                id: result.insertId 
            });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    // PUT - Actualizar producto
    update: async (req, res) => {
        try {
            const { Nombre, Precio, Stock, SubcategoriaId } = req.body;
            const [result] = await pool.execute(
                'UPDATE Productos SET Nombre = ?, Precio = ?, Stock = ?, SubcategoriaId = ? WHERE Id = ?', 
                [Nombre, Precio, Stock, SubcategoriaId, req.params.id]
            );
            if (result.affectedRows === 0) {
                return res.status(404).json({ message: 'Producto no encontrado' });
            }
            res.json({ message: 'Producto actualizado exitosamente' });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    // DELETE - Eliminar producto
    delete: async (req, res) => {
        try {
            const [result] = await pool.execute('DELETE FROM Productos WHERE Id = ?', [req.params.id]);
            if (result.affectedRows === 0) {
                return res.status(404).json({ message: 'Producto no encontrado' });
            }
            res.json({ message: 'Producto eliminado exitosamente' });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    // GET - Endpoint complejo: productos detallados con años en inventario
    getDetallado: async (req, res) => {
        try {
            const [rows] = await pool.execute(`
                SELECT 
                    p.Nombre as Producto,
                    p.Precio,
                    p.Stock,
                    s.Nombre as Subcategoria,
                    c.Nombre as Categoria,
                    TIMESTAMPDIFF(YEAR, p.FechaIngreso, NOW()) as AniosEnInventario
                FROM Productos p 
                JOIN Subcategorias s ON p.SubcategoriaId = s.Id
                JOIN Categorias c ON s.CategoriaId = c.Id
                ORDER BY p.Nombre
            `);
            res.json(rows);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
};

module.exports = productosController;