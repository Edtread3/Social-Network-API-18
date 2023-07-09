const router = require('express').Router();
const userRoutes = require('./api/userRoutes.js');
const thoughtRoutes = require('./api/thoughtRoutes.js');

router.use('/thought', thoughtRoutes);
router.use('/user', userRoutes);


//Export the router
module.exports = router;