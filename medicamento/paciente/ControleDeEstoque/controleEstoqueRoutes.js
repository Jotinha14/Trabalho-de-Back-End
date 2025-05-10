const express = require('express');
const router = express.Router();
const ControleEstoqueController = require('../controllers/controleEstoqueController');

router.post('/', ControleEstoqueController.create);
router.get('/', ControleEstoqueController.getAll);
router.put('/:id/status', ControleEstoqueController.updateStatus);
router.delete('/:id', ControleEstoqueController.delete);

module.exports = router;
