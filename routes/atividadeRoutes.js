import authMiddleware from '../middleware/auth.js';
const express = require('express');
const router = express.Router();
const controller = require('../controllers/atividadeController');

router.get('/', controller.getAll);
router.get('/:id', controller.getById);
router.post('/', controller.create);

module.exports = router;
