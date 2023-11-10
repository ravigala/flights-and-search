const express = require('express');
const router = express.Router();

const {CityController, FlightController} = require('../../controllers/index');

router.post('/city', CityController.create);
router.delete('/city/:id', CityController.destroy);
router.get('/city/:id', CityController.get);
router.get('/city', CityController.getAllCities);
router.patch('/city/:id', CityController.update);

router.post('/flights', FlightController.create);
router.get('/flights', FlightController.getAll);

module.exports = router;