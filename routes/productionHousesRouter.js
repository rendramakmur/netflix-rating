const ProdHouseController = require('../controllers/productionHouseController');
const router = require('express').Router();

router.get('/', ProdHouseController.showList)

module.exports = router;