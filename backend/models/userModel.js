const db = require('../config/db');
const bcrypt = require('bcrypt');

const UserModel = {
    createUser: async (name, email, password) => {
        const hashedPassword = await bcrypt.hash(password, 10);
        const query = 'INSERT INTO users (name, email, password) VALUES (?, ?, ?)';
        return db.promise().query(query, [name, email, hashedPassword]);
    },

    findUserByEmail: async (email) => {
        const query = 'SELECT * FROM users WHERE email = ?';
        return db.promise().query(query, [email]);
    },

    // Agregar más métodos según sea necesario
};

module.exports = UserModel;
