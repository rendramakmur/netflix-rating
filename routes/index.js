const router = require('express').Router();
const productionHouses = require('./productionHousesRouter');
const movies = require('./moviesRouter');
const users = require('./usersRouter');

router.get('/', (req, res) => {
    res.redirect('/production-houses');
})
router.use('/production-houses', productionHouses);
router.use('/movies', movies);
router.use('/users', users);

module.exports = router;