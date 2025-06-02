const mysql = require('mysql2');

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'TiendaDB'
});

class Categoria {
    static getAll(callback) {
        db.query('SELECT * FROM Categorias', callback);
    }

    static getById(id, callback) {
        db.query('SELECT * FROM Categorias WHERE Id = ?', [id], callback);
    }

    static create(data, callback) {
        db.query('INSERT INTO Categorias (Nombre) VALUES (?)', [data.Nombre], callback);
    }

    static update(id, data, callback) {
        db.query('UPDATE Categorias SET Nombre = ? WHERE Id = ?', [data.Nombre, id], callback);
    }

    static delete(id, callback) {
        db.query('DELETE FROM Categorias WHERE Id = ?', [id], callback);
    }
}

module.exports = Categoria;