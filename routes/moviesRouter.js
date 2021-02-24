const MovieController = require('../controllers/movieController');
const router = require('express').Router();

router.get('/', MovieController.showList);

router.get('/add', MovieController.getAddMovie);
router.post('/add', MovieController.postAddMovie);

router.get('/delete/:id', MovieController.delete);

router.get('/edit/:id', MovieController.getEditMovie);
router.post('/edit/:id', MovieController.postEditMovie);

router.get('/add/user/:id', MovieController.getAddUser);
router.post('/add/user/:id', MovieController.postAddUser);


module.exports = router;