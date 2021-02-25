const { Movie, ProductionHouse } = require('../models');
const userStatus = require('../middlewares/userStatus');

class ProdHouseController {
    static showList(req, res) {
        ProductionHouse.findAll({
            order: [
                ["name", "ASC"]
            ]
        })
            .then(data => {
                res.render('productionHouse', {data: data, userStatus: userStatus(req)});
            })
            .catch(err => {
                res.send(err);
            })
    }

    static getAddProdHouse(req, res) {
        res.render('addProdHouse')
    }

    static postAddProdHouse(req, res) {
        let newProdHouse = {
            name: req.body.name,
            country: req.body.country
        }

        ProductionHouse.create(newProdHouse)
            .then(data => {
                res.redirect('/production-houses');
            })
            .catch(err => {
                res.send(err);
            })
    }

    static delete (req, res) {
        let id = req.params.id;

        ProductionHouse.destroy({
            where: {
                "id": id
            }
        })
            .then(data => {
                res.redirect('/production-houses')
            })
            .catch(err => {
                res.send(err);
            })
    }

    static getEditProdHouse(req, res) {
        let id = req.params.id;

        ProductionHouse.findByPk(id)
            .then(data => {
                res.render('editProdHouse', {data, userStatus: userStatus(req)})
            })
            .catch(data => {
                res.send(err);
            })
    }

    static postEditProdHouse(req, res) {
        let id = req.params.id;
        let prodHouseUpdated = {
            name: req.body.name,
            country: req.body.country
        }

        ProductionHouse.update(prodHouseUpdated, {
            where: {
                "id": id
            }
        })
            .then(data => {
                res.redirect('/production-houses');
            })
            .catch(err => {
                res.send(err);
            })
    }
}

module.exports = ProdHouseController;