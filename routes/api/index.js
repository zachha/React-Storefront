const router = require('express').Router();
const passport = require('passport');
const auth = require('../../controllers/.auth/auth');
const userRoutes = require('./userAPI');
const itemRoutes = require('./itemAPI');
require('../../controllers/.auth/passport');

//user routes
router.use('/user', passport.authenticate('jwt',
{session: false}),userRoutes);

//item routes
router.use('/item', itemRoutes);

module.exports = router;