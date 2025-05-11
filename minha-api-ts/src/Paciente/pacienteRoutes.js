const express = require('express');
const router = express.Router();
const PacienteController = require('../controllers/pacienteController');

// Rota para registrar paciente
router.post('/register', PacienteController.register);

// Rota para login
router.post('/login', PacienteController.login);

module.exports = router;
