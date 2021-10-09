const express = require('express');

const router = express.Router();
const { getCars, patchStatus, deleteCar, addCar } = require('../model/cars.js');

// const asyncHandler = require('express-async-handler');

router.get('/hello', (req, res) => res.send('Hello'));

router.get('/cars', (req, res) => {
  res.status(200).json(getCars());
});

router.patch('/cars/:id', (req, res) => {
  const result = patchStatus(req.params.id, req.body);
  if (result.status == 'error') res.status(400);
  else res.status(200);
  res.json(result);
});

router.delete('/cars/:id', (req, res) => {
  res.status(200).json(deleteCar(req.params.id));
});

router.post('/cars', (req, res) => {
  const result = addCar(req.body);
  res.json(result);
});

module.exports = router;
