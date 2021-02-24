const ProdHouseController = require('../controllers/productionHouseController');
const router = require('express').Router();

router.get('/', ProdHouseController.showList);

router.get('/add', ProdHouseController.getAddProdHouse)
router.post('/add', ProdHouseController.postAddProdHouse)

router.get('/edit/:id', ProdHouseController.getEditProdHouse)
router.post('/edit/:id', ProdHouseController.postEditProdHouse)

router.get('/delete/:id', ProdHouseController.delete)

module.exports = router;