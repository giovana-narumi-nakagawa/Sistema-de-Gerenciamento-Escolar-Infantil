import { Router } from 'express';
const router = Router();
import { getAll, getById, create } from '../app/controllers/alunoController.js';
import authMiddleware from '../app/middleware/auth.js';

router.use(authMiddleware);

router.get('/', controller.getAll);
router.get('/:id', controller.getById);
router.post('/', controller.create);
router.put('/:id', controller.update);

export default router;
