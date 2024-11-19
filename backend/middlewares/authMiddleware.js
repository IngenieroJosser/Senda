const jwt = require('jsonwebtoken');

const authMiddleware = (req, res, next) => {
    const token = req.headers.authorization?.split(' ')[1];
    if (!token) {
        return res.status(403).json({ error: 'Acceso denegado. Token no proporcionado.' });
    }

    try {
        const decoded = jwt.verify(token, 'josser'); // Cambia 'tu_secreto' por tu clave secreta real
        req.user = decoded; // Adjunta los datos del usuario a la solicitud
        next(); // Continúa hacia el siguiente middleware o controlador
    } catch (error) {
        res.status(401).json({ error: 'Token inválido o expirado.' });
    }
};

module.exports = authMiddleware;
