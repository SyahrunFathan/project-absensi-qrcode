import express from 'express';
import {
  getDosen,
  getDosenById,
  createDosen,
} from '../controllers/DosenController.js';
import {Authentication} from '../middleware/Authentication.js';

const router = express.Router();

router.get('/', Authentication, getDosen);
router.get('/:id', Authentication, getDosenById);
router.post('/create', Authentication, createDosen);

export default router;