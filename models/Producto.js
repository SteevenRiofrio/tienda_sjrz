const mysql = require('mysql2');

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'TiendaDB'
});

class Producto {
    static getAll(callback) {
        const sql = `
            SELECT p.Id, p.Nombre, p.Precio, p.Stock, p.SubcategoriaId, p.FechaIngreso,
                   s.Nombre as SubcategoriaNombre, c.Nombre as CategoriaNombre
            FROM Productos p 
            JOIN Subcategorias s ON p.SubcategoriaId = s.Id
            JOIN Categorias c ON s.CategoriaId = c.Id
        `;
        db.query(sql, callback);
    }

    static getById(id, callback) {
        const sql = `
            SELECT p.Id, p.Nombre, p.Precio, p.Stock, p.SubcategoriaId, p.FechaIngreso,
                   s.Nombre as SubcategoriaNombre, c.Nombre as CategoriaNombre
            FROM Productos p 
            JOIN Subcategorias s ON p.SubcategoriaId = s.Id
            JOIN Categorias c ON s.CategoriaId = c.Id
            WHERE p.Id = ?
        `;
        db.query(sql, [id], callback);
    }

    static create(data, callback) {
        db.query('INSERT INTO Productos (Nombre, Precio, Stock, SubcategoriaId) VALUES (?, ?, ?, ?)', 
            [data.Nombre, data.Precio, data.Stock, data.SubcategoriaId], callback);
    }

    static update(id, data, callback) {
        db.query('UPDATE Productos SET Nombre = ?, Precio = ?, Stock = ?, SubcategoriaId = ? WHERE Id = ?', 
            [data.Nombre, data.Precio, data.Stock, data.SubcategoriaId, id], callback);
    }

    static delete(id, callback) {
        db.query('DELETE FROM Productos WHERE Id = ?', [id], callback);
    }

    static getDetallado(callback) {
        const sql = `
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
        `;
        db.query(sql, callback);
    }
}

module.exports = Producto;