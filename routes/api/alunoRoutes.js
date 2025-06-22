import { Router } from 'express';
import * as controller from '../../app/controllers/alunoController.js';
import authMiddleware from '../../app/middleware/auth.js';

const router = Router();

router.use(authMiddleware);

router.get('/', controller.getAll);
router.get('/:id', controller.getById);
router.post('/', controller.create);
router.put('/:id', controller.update);

export default router;
