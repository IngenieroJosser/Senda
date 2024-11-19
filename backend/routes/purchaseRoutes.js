const express = require('express');
const router = express.Router();
const purchaseController = require('../controllers/purchaseController'); // Ajusta la ruta según tu estructura

// Ruta para crear una compra
router.post('/purchases', purchaseController.createPurchase);

module.exports = router;
