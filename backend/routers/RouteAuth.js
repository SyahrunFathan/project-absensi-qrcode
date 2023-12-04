import express from 'express';
import {Login, Logout, resmoveToken} from '../controllers/AuthControllers.js';
import {Authentication} from '../middleware/Authentication.js';

const router = express.Router();

router.post('/login', Login);
router.patch('/remove_token/:id', resmoveToken);
router.delete('/logout', Authentication, Logout);

export default router;
