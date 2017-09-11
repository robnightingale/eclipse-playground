const flightRouter = require('express').Router();

/* GET flights listing. */
flightRouter.get('/:from-:to', function getFlightsFromTo(req, res, next) {
    res.send(req.params);
});

module.exports = flightRouter;
