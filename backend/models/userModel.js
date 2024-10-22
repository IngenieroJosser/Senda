const db = require('../config/db');
const bcrypt = require('bcrypt');

const UserModel = {
    // Método para crear un nuevo usuario
    createUser: async (name, email, password) => {
        try {
            // Hashear la contraseña
            const hashedPassword = await bcrypt.hash(password, 10);
            const query = 'INSERT INTO users (name, email, password) VALUES (?, ?, ?)';
            // Ejecutar la consulta para insertar el usuario
            return await db.promise().query(query, [name, email, hashedPassword]);
        } catch (error) {
            console.error('Error al crear el usuario:', error);
            throw error; // Lanza el error para que pueda ser capturado en el controlador
        }
    },

    // Método para buscar un usuario por su correo electrónico
    findUserByEmail: async (email) => {
        try {
            const query = 'SELECT * FROM users WHERE email = ?';
            const [rows] = await db.promise().query(query, [email]); // Obtener solo las filas
            console.log('Usuario encontrado:', rows);
            return rows; // Devuelve las filas directamente
        } catch (error) {
            console.error('Error al buscar el usuario:', error);
            throw error; // Lanza el error para que pueda ser capturado en el controlador
        }
    },

    // Agregar más métodos según sea necesario
};

module.exports = UserModel;
