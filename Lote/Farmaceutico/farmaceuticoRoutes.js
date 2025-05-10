const express = require('express');
const router = express.Router();
const FarmaceuticoController = require('../controllers/farmaceuticoController');

router.post('/', FarmaceuticoController.create);
router.get('/', FarmaceuticoController.getAll);
router.get('/:id', FarmaceuticoController.getById);
router.put('/:id', FarmaceuticoController.update);
router.delete('/:id', FarmaceuticoController.delete);

module.exports = router;
