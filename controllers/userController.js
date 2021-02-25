const { User, Movie } = require('../models')

class UserController {
    static showList(req, res) {
        User.findAll()
            .then(data => {
                res.render('users', {data})
            })
            .catch(err => {
                res.send(err);
            })
    }

    static getAddUser (req, res) {
        res.render('addUser');
    }

    static postRegister(req, res) {
        let newUser = {
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            password: req.body.password,
            email: req.body.email,
            age: req.body.age
        }

        User.create(newUser)
            .then(data => {
                res.redirect('/');
            })
            .catch(err => {
                let errors = []
                err.errors.forEach(error => {
                    errors.push(error.message);
                })
                res.redirect(`/register?errors=${errors}`)
            })
    }

    static getEditUser(req, res) {
        let id = req.params.id;
        let errors = req.query.errors;
        if (errors) {
            errors = errors.split(',');
        }
        User.findByPk(id)
            .then(data => {
                res.render('editUser', { data, errors})
            })
            .catch(err => {
                res.send(err);
            })
    }

    static postEditUser(req, res) {
        let id = req.params.id;
        let updated = {
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            password: req.body.password,
            email: req.body.email,
            age: req.body.age
        }

        User.update(updated, {
            where: {
                "id": id
            },
            individualHooks: true
        })
        .then(data => {
            res.redirect('/Users')
        })
        .catch(err => {
            let errors = [];
                err.errors.forEach(error => {
                    errors.push(error.message);
                })
                res.redirect(`/users/edit/${id}?errors=${errors}`);
        })
    }

    static deleteUser (req, res) {
        let id = req.params.id;
        User.destroy({where: {"id": id}})
            .then(data => {
                res.redirect('/users');
            })
            .catch(err => {
                res.send(err);
            })
    }

    static ratingDetail (req, res) {
        let id = req.params.id

        User.findByPk(id, {
            include: Movie
        })
            .then(data => {
                res.render('userDetails', {data});
            })
            .catch(err => {
                res.send(err);
            })
    }
}

module.exports = UserController;