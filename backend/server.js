const express = require('express');
const cors = require('cors');
const authRoutes = require('./routes/authRoutes'); // Aqui estan todos los endpoints
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

// Usar CORS
app.use(cors());

// Middleware para parsear JSON
app.use(express.json());

// Rutas de la API
app.use('/api', authRoutes);

// Iniciar el servidor
app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
});
