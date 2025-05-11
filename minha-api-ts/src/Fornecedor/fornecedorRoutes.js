const express = require('express');
const router = express.Router();
const FornecedorController = require('../controllers/fornecedorController');

// Rota para criar fornecedor
router.post('/', FornecedorController.create);

// Rota para obter todos os fornecedores
router.get('/', FornecedorController.getAll);

// Rota para atualizar status de fornecedor
router.put('/:id/status', FornecedorController.updateStatus);

// Rota para deletar fornecedor
router.delete('/:id', FornecedorController.delete);

module.exports = router;
