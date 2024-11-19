const express = require('express');
const authMiddleware = require('../middlewares/authMiddleware');
const router = express.Router();

// Ruta protegida
router.get('/login', authMiddleware, (req, res) => {
    res.status(200).json({ message: 'Acceso autorizado', user: req.user });
});

// Ruta pública
router.get('/register-users', (req, res) => {
    res.status(200).json({ message: 'Ruta pública, no requiere autenticación' });
});

module.exports = router;
