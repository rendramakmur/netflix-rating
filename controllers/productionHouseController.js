const { Movie, ProductionHouse } = require('../models');

class ProdHouseController {
    static showList(req, res) {
        ProductionHouse.findAll({
            order: [
                ["name", "ASC"]
            ]
        })
            .then(data => {
                res.render('productionHouse', {data: data});
            })
            .catch(err => {
                res.send(err);
            })
    }
}

module.exports = ProdHouseController;