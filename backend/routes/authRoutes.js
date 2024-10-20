const express = require('express');
const authController = require('../controllers/authController');

const router = express.Router();

router.post('/register-users', authController.registerUser);
router.post('/login', authController.loginUser);

module.exports = router;
