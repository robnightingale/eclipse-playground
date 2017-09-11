const userRouter = require('express').Router();

/* GET users listing. */
userRouter.get('/', function getUsers(req, res, next) {
    res.send('respond with a resource');
});

module.exports = userRouter;
