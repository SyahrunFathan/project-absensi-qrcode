import express from 'express';
import {getProgramByMahasiswaId} from '../controllers/ProgramControllers.js';
import {Authentication} from '../middleware/Authentication.js';

const router = express.Router();

router.get('/:id', Authentication, getProgramByMahasiswaId);

export default router;
