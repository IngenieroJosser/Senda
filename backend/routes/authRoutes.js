const express = require('express');
const authController = require('../controllers/authController');
const logOutController = require('../controllers/logOutController');
const purchaseController = require('../controllers/purchaseController');

const router = express.Router();

router.post('/register-users', authController.registerUser)
router.post('/login', authController.loginUser)
router.post('/logout', logOutController.logOutUser)
router.post('/purchases', purchaseController.createPurchase);

module.exports = router;
