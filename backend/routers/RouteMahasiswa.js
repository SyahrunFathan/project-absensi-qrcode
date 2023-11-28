import express from 'express';
import { getMahasiswa, getMahasiswaById, createMahasiswa } from '../controllers/MahasiswaController.js';

const router = express.Router();

router.get('/', getMahasiswa);
router.get('/:id', getMahasiswaById);
router.post('/create', createMahasiswa);

export default router;
