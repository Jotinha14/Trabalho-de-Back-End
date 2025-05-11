import { Router } from 'express';
import ControleEstoqueController from '../controllers/controleEstoqueController';

const router = Router();

router.post('/', ControleEstoqueController.create);
router.get('/', ControleEstoqueController.getAll);
router.put('/:id/status', ControleEstoqueController.updateStatus);
router.delete('/:id', ControleEstoqueController.delete);

export default router;
