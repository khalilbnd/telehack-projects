const express = require('express');

const {ENDPOINTS} = require('../constant');
const { ClientPostController } = require('../controller/ClientController');

const router = express.Router();

router.post(ENDPOINTS.CLIENT['MAIN'], ClientPostController);


module.exports = router;