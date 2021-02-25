const router = require('express').Router();
const productionHouses = require('./productionHousesRouter');
const movies = require('./moviesRouter');
const users = require('./usersRouter');
const mid = require('../middlewares/auth');
const HomeController = require('../controllers/homeController');
const UserController = require('../controllers/userController');

router.get('/', HomeController.landingPage);
router.get('/register', HomeController.register);
router.post('/register', UserController.postRegister);
router.get('/login', HomeController.getLogin);
router.post('/login', HomeController.postLogin);
router.get('/failed', HomeController.getFailedPage);
router.get('/logout', HomeController.logout);

router.use(mid)

router.use('/production-houses', productionHouses);
router.use('/movies', movies);
router.use('/users', users);

module.exports = router;