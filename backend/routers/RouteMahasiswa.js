import express from 'express';
import { getMahasiswa, getMahasiswaById, createMahasiswa } from '../controllers/MahasiswaController.js';
import {Authentication} from '../middleware/Authentication.js';

const router = express.Router();

router.get('/', Authentication, getMahasiswa);
router.get('/:id', Authentication, getMahasiswaById);
router.post('/create', Authentication, createMahasiswa);

export default router;
