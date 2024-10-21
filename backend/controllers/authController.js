const UserModel = require('../models/userModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken'); // Asegúrate de instalar jsonwebtoken

const authController = {
    // Registro de usuarios
    registerUser: async (req, res) => {
        const { name, email, password } = req.body;

        if (!name || !email || !password) {
            return res.status(400).json({ error: 'Todos los campos son requeridos.' });
        }

        // Validación de formato de correo electrónico
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return res.status(400).json({ error: 'El formato del correo electrónico es inválido.' });
        }

        try {
            // Buscar si el usuario ya existe por su correo electrónico
            const [existingUser] = await UserModel.findUserByEmail(email);
            if (existingUser.length > 0) {
                return res.status(409).json({ error: 'El correo electrónico ya está en uso.' });
            }

            // Hashear la contraseña
            const hashedPassword = await bcrypt.hash(password, 10);
            
            // Crear el usuario
            await UserModel.createUser(name, email, hashedPassword);
            res.status(201).json({ message: 'Usuario registrado correctamente' });
        } catch (error) {
            console.error('Error al registrar el usuario:', error);
            return res.status(500).json({ error: 'Error al registrar el usuario' });
        }
    },

    // Inicio de sesión de usuarios
    loginUser: async (req, res) => {
        const { email, password } = req.body;
    
        if (!email || !password) {
            return res.status(400).json({ error: 'Todos los campos son requeridos.' });
        }
    
        try {
            const user = await UserModel.findUserByEmail(email);
    
            // Agregar log para ver el usuario encontrado
            console.log('Usuario encontrado:', user);
    
            if (user.length === 0) {
                return res.status(401).json({ error: 'Credenciales incorrectas.' });
            }
    
            console.log('Contraseña ingresada:', password);
            console.log('Contraseña almacenada:', user[0].password); // Para verificar el hash
    
            const isPasswordValid = await bcrypt.compare(password, user[0].password);
            if (!isPasswordValid) {
                return res.status(401).json({ error: 'Credenciales incorrectas.' });
            }
            else {
                console.log('Contraseña correcta');
            }
    
            const token = jwt.sign({ id: user[0].id }, 'tu_secreto', { expiresIn: '1h' });
    
            res.status(200).json({
                message: 'Inicio de sesión exitoso',
                user: { id: user[0].id, name: user[0].name, email: user[0].email },
                token
            });
        } catch (error) {
            console.error('Error al iniciar sesión:', error);
            res.status(500).json({ error: 'Error al iniciar sesión' });
        }
    },        
};

module.exports = authController;
