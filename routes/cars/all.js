const data = require('../../data.json');

function getCars(req, res){

    const cars = data.cars;
    res.status(200).json({cars});

};
module.exports = getCars;
