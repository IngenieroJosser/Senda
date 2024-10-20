const UserModel = require('../models/userModel');

const authController = {
    registerUser: async (req, res) => {
        const { name, email, password } = req.body;

        if (!name || !email || !password) {
            return res.status(400).json({ error: 'Todos los campos son requeridos.' });
        }

        try {
            const [existingUser] = await UserModel.findUserByEmail(email);
            if (existingUser.length > 0) {
                return res.status(409).json({ error: 'El correo electrónico ya está en uso.' });
            }

            await UserModel.createUser(name, email, password);
            res.status(201).json({ message: 'Usuario registrado correctamente' });
        } catch (error) {
            console.error('Error al registrar el usuario:', error);
            return res.status(500).json({ error: 'Error al registrar el usuario' });
        }
    },

    loginUser: async (req, res) => {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({ error: 'Todos los campos son requeridos.' });
        }

        try {
            const [user] = await UserModel.findUserByEmail(email);
            if (user.length === 0) {
                return res.status(401).json({ error: 'Credenciales incorrectas.' });
            }

            const isPasswordValid = await bcrypt.compare(password, user[0].password);
            if (!isPasswordValid) {
                return res.status(401).json({ error: 'Credenciales incorrectas.' });
            }

            res.status(200).json({ message: 'Inicio de sesión exitoso', user: { id: user[0].id, name: user[0].name, email: user[0].email } });
        } catch (error) {
            console.error('Error al iniciar sesión:', error);
            res.status(500).json({ error: 'Error al iniciar sesión' });
        }
    },
};

module.exports = authController;
