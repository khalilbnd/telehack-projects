const express = require('express');

const {ENDPOINTS} = require('../constant');
const { SignUpClientController, SignInClientController, ForgetPassword, ResetPassword } = require('../controller/AuthController');
const hash = require('../middleware/hashedPassword');
const hashedPassword = require('../middleware/hashedPassword');



const router = express.Router();

router.post(ENDPOINTS.AUTH['REGISTER'], hashedPassword,SignUpClientController);
router.post(ENDPOINTS.AUTH['LOGIN'], SignInClientController);
router.post(ENDPOINTS.AUTH['FORGET_PASSWORD'], ForgetPassword);
router.post(ENDPOINTS.AUTH['RESET_PASSWORD'], hashedPassword, ResetPassword);

module.exports = router;