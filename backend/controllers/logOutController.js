const logOutController = {
    logOutUser: (req, res) => {
        try {
            // Invalida la sesión o simplemente responde
            res.clearCookie('token'); // Si estás usando cookies
            return res.status(200).json({ message: 'Sesión cerrada correctamente.' });
        } catch (error) {
            return res.status(500).json({ error: 'Error al cerrar sesión.' });
        }
    }
};

module.exports = logOutController;
