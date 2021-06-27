const router = require('express').Router();

const sessionRouter = require('./session.js');
const usersRouter = require('./users.js');
const businessRouter = require('./businesses')
const reviewRouter = require('./review')

router.use('/session', sessionRouter);
router.use('/users', usersRouter);
router.use('/businesses', businessRouter)
// router.use('')

module.exports = router;
