import express from 'express';
import {getBerita, createBerita} from '../controllers/BeritaControllers.js';
import {Authentication} from '../middleware/Authentication.js';

const router = express.Router();

router.get('/', Authentication, getBerita);
router.post('/', Authentication, createBerita);

export default router;
