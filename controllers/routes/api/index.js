const router = require('express').Router();

// const thoughtRoutes = require('./thoughtRoutes');  // TODO - uncomment when ready
const userRoutes = require('./userRoutes');

// router.use('/thoughts', thoughtRoutes);  // TODO - uncomment when ready
router.use('/users', userRoutes);

module.exports = router;
