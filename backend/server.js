const express = require('express');
const cors = require('cors');
const authRoutes = require('./routes/authRoutes'); // Aqui estan todos los endpoints
const purchaseRoutes = require('./routes/purchaseRoutes');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

// Usar CORS
app.use(cors());

// Middleware para parsear JSON
app.use(express.json());

// Rutas de la API
app.use('/api', authRoutes);
app.use('/api', purchaseRoutes);

// Middleware para manejar errores
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Algo salió mal!');
});

// Iniciar el servidor
app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
});
