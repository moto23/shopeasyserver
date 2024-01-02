import express from 'express';
import { userSignUp, userLogin } from '../controller/usercontroller.js';

const router = express.Router();

// Define valid callback functions for the POST routes
router.post('/signup', userSignUp);
router.post('/login', userLogin);

export default router;
