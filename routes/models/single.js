function getModel(req,res) {

    const model = req.model;
    res.status(200).json({model});

}

module.exports = getModel;
