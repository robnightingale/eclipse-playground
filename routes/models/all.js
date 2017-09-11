const data = require('../../data.json');

function getModels(req, res) {
    const models = data.models;

    res.status(200).json({models});
};

module.exports = getModels;
