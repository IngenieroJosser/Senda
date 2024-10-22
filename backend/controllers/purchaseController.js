// routes/purchases.js
const express = require('express');
const router = express.Router();
const db = require('../config/db'); // Importa tu configuración de conexión a la base de datos
const e = require('express');

const purchaseController = {
    createPurchase: async (req, res) => {
        const { user_id, product_name, product_price } = req.body;
    
        // Asegúrate de validar los datos
        if (!user_id || !product_name || !product_price) {
            return res.status(400).json({ message: 'Todos los campos son requeridos.' });
        }
    
        try {
            const query = 'INSERT INTO purchases (user_id, product_name, product_price) VALUES (?, ?, ?)';
            const values = [user_id, product_name, product_price];
    
            // Ejecuta la consulta
            await db.execute(query, values);
    
            return res.status(201).json({ message: 'Compra realizada con éxito.' });
        } catch (error) {
            console.error(error);
            return res.status(500).json({ message: 'Error al realizar la compra.' });
        }
    },
}

module.exports = purchaseController;
