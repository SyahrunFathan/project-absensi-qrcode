import express from 'express';
import {
  getDosen,
  getDosenById,
  createDosen,
} from '../controllers/DosenController.js';

const router = express.Router();

router.get('/', getDosen);
router.get('/:id', getDosenById);
router.post('/create', createDosen);

export default router;