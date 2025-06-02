const mysql = require('mysql2');

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'TiendaDB'
});

class Subcategoria {
    static getAll(callback) {
        const sql = `
            SELECT s.Id, s.Nombre, s.CategoriaId, c.Nombre as CategoriaNombre 
            FROM Subcategorias s 
            JOIN Categorias c ON s.CategoriaId = c.Id
        `;
        db.query(sql, callback);
    }

    static getById(id, callback) {
        const sql = `
            SELECT s.Id, s.Nombre, s.CategoriaId, c.Nombre as CategoriaNombre 
            FROM Subcategorias s 
            JOIN Categorias c ON s.CategoriaId = c.Id 
            WHERE s.Id = ?
        `;
        db.query(sql, [id], callback);
    }

    static create(data, callback) {
        db.query('INSERT INTO Subcategorias (Nombre, CategoriaId) VALUES (?, ?)', 
            [data.Nombre, data.CategoriaId], callback);
    }

    static update(id, data, callback) {
        db.query('UPDATE Subcategorias SET Nombre = ?, CategoriaId = ? WHERE Id = ?', 
            [data.Nombre, data.CategoriaId, id], callback);
    }

    static delete(id, callback) {
        db.query('DELETE FROM Subcategorias WHERE Id = ?', [id], callback);
    }
}

module.exports = Subcategoria;