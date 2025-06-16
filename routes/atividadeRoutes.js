import { Router } from 'express';
const router = Router();
import { getAll, getById, create, update } from '../app/controllers/atividadeController.js';
import authMiddleware from '../app/middleware/auth.js';

router.use(authMiddleware);

router.get('/', getAll);
router.get('/:id', getById);
router.post('/', create);
router.put('/:id', update);

export default router;

