const express = require('express');
const router = express.Router();

const CityController = require('../../controllers/city-controller');

router.use('/city', CityController.create);

module.exports = router;