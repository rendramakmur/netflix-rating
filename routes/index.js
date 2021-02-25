const router = require('express').Router();
const productionHouses = require('./productionHousesRouter');
const movies = require('./moviesRouter');
const users = require('./usersRouter');
const mid = require('../middleware/auth')
const HomeController = require('../controllers/homeController');

router.get('/', HomeController.landingPage);
router.get('/register', HomeController.register);
router.get('/login', HomeController.getLogin);
router.post('/login', HomeController.postLogin);
router.use('/production-houses', productionHouses);



router.use(mid)

router.use('/movies', movies);
router.use('/users', users);

module.exports = router;