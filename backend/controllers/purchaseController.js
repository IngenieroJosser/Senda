const purchaseModel = require('../models/purchaseModel'); // Asegúrate de que la ruta sea correcta

const purchaseController = {
    createPurchase: async (req, res) => {
        try {
            const purchaseData = req.body; // Obtener datos de la compra
            console.log('Datos de la compra:', purchaseData); // Esto debería mostrar los datos recibidos

            // Aquí se asume que `purchaseData` tiene la estructura adecuada
            if (!purchaseData.user_id) {
                return res.status(400).json({ message: 'user_id es requerido' });
            }

            const result = await purchaseModel.create(purchaseData);

            res.status(201).json({
                message: 'Compra creada exitosamente',
                data: {
                    id: result.insertId,
                    ...purchaseData,
                },
            });
        } catch (error) {
            console.error('Error al crear la compra:', error);
            res.status(500).json({ message: 'Error al crear la compra', error: error.message });
        }
    },
};

module.exports = purchaseController;
