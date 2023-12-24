const express = require('express');
const { userSignUp, userLogin } = require('../controller/usercontroller.js');

const router = express.Router();

// Define valid callback functions for the POST routes
router.post('/signup', userSignUp);
router.post('/login', userLogin);

module.exports = router;
