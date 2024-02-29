const express = require('express');


const {ENDPOINTS} = require('../constant');

const Wilaya = require('../model/Wilaya');
const Commune = require('../model/Commune');
const { CoreWilayaController, CoreCommuneController } = require('../controller/CoreController');

const route = express.Router();

route.get(ENDPOINTS.CORE['WILAYAS'], CoreWilayaController);
route.get(ENDPOINTS.CORE['COMMUNES'], CoreCommuneController);


module.exports = route;