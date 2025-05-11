import express from 'express';
import medicoController from '../controllers/medicoController';

const router = express.Router();

router.post('/', medicoController.create);
router.get('/', medicoController.getAll);
router.get('/:id', medicoController.getById);
router.put('/:id', medicoController.update);
router.delete('/:id', medicoController.delete);

export default router;

