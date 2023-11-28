import express from 'express';
import {Login, resmoveToken} from '../controllers/AuthControllers.js';

const router = express.Router();

router.post('/login', Login);
router.patch('/remove_token/:id', resmoveToken);

export default router;
