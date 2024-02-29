const express = require('express');

const {ENDPOINTS} = require('../constant');
const { RecommandationsSubscriptionController } = require('../controller/SubscriptionController');

const router = express.Router();


router.post(ENDPOINTS.SUBSCRIPTIONS['RECOMMENDATION'], RecommandationsSubscriptionController);


module.exports = router;
