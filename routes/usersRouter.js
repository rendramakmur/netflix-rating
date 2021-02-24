const UserController = require('../controllers/userController');
const router = require('express').Router();

router.get('/', UserController.showList);

router.get('/add', UserController.getAddUser);
router.post('/add', UserController.postAddUser);

router.get('/edit/:id', UserController.getEditUser);
router.post('/edit/:id', UserController.postEditUser);

router.get('/delete/:id', UserController.deleteUser);

router.get('/rating/detail/:id', UserController.ratingDetail);

module.exports = router;