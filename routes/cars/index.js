const carRouter = require('express').Router();
const all = require('./all');
const single = require('./single');

carRouter.get('/', all);
carRouter.get('/:carId', single);

const findObject = require('../../utils/findObject');

carRouter.param('carId', findObject('car'));

module.exports = carRouter;
