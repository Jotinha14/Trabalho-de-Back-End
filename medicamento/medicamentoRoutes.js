const express = require('express');
const router = express.Router();
const MedicamentoController = require('../controllers/medicamentoController');
const authMiddleware = require('../middleware/authMiddleware');

// Usar o middleware de autenticação para proteger as rotas
router.get('/', authMiddleware, MedicamentoController.getAll);
router.get('/:id', authMiddleware, MedicamentoController.getById);
router.post('/', authMiddleware, MedicamentoController.create);
router.put('/:id', authMiddleware, MedicamentoController.update);
router.delete('/:id', authMiddleware, MedicamentoController.delete);

module.exports = router;
