const { Movie, ProductionHouse, User, Rating } = require('../models');
const userStatus = require('../middlewares/userStatus');
const changeTime = require('../helpers/changeTime');

class MovieController {
    static showList (req, res) {
        Movie.findAll({
            include: ProductionHouse,
            order: [['released_year', 'DESC']]
        })
            .then(data => {
                res.render('movie', { data: data, userStatus: userStatus(req)})
            })
            .catch(err => {
                res.send(err);
            })
    }

    static getAddMovie(req, res) {
        let errors = req.query.errors
        if (errors) {
            errors = errors.split(',');
        }
        let prodHouseData;
        ProductionHouse.findAll()
            .then(data => {
                prodHouseData = data;
                return Movie.findAll()
            })
            .then(data => {
                movies = data
                res.render('addMovie', {errors, prodH: prodHouseData, userStatus: userStatus(req)});
            })
            .catch(err => {
                res.render('addMovie', {errors, prodH: prodHouseData, userStatus: userStatus(req)});
            })
    }

    static postAddMovie(req, res) {
        let newMovie = {
            name: req.body.name,
            description: req.body.description,
            duration: req.body.duration,
            released_year: req.body.released_year,
            movie_type: req.body.movie_type,
            trailer_url: req.body.trailer_url,
            ProductionHouseId: req.body.ProductionHouseId
        }

        Movie.create(newMovie)
            .then(data => {
                res.redirect('/movies');
            })
            .catch(err => {
                let errors = [];
                err.errors.forEach(error => {
                    errors.push(error.message);
                })
                res.redirect(`/movies/add?errors=${errors}`);
            })
    }

    static delete(req, res) {
        let id = req.params.id;
        Movie.destroy({where: {"id": id}})
            .then(data => {
                res.redirect('/movies');
            })
            .catch(err => {
                res.send(err);
            })
    }

    static getEditMovie(req, res) {
        let errors = req.query.errors;
        if (errors) {
            errors = errors.split(',');
        }
        let id = req.params.id;
        let pickedMovie;
        Movie.findByPk(id, {
            include: ProductionHouse
        })
            .then(data => {
                console.log(data);
                pickedMovie = data;
                return ProductionHouse.findAll()
            })
            .then(data => {
                res.render('editMovie', {dataMovies: pickedMovie, errors, prodH: data, userStatus: userStatus(req)})
            })
            .catch(err => {
                res.send(err);
            })
    }

    static postEditMovie(req, res) {
        let id = req.params.id;
        let updated = {
            name: req.body.name,
            description: req.body.description,
            duration: req.body.duration,
            released_year: req.body.released_year,
            movie_type: req.body.movie_type,
            trailer_url: req.body.trailer_url,
            ProductionHouseId: req.body.ProductionHouseId
        }

        Movie.update(updated, {
            where: {
                "id": id
            },
            individualHooks: true
        })
        .then(data => {
            res.redirect('/movies')
        })
        .catch(err => {
            let errors = []
            err.errors.forEach(error => {
                errors.push(error.message);
            })
            res.redirect(`/movies/edit/${id}?errors=${errors}`)
        })
    }

    static getAddUser(req, res) {
        let errors = req.query.errors
        if (errors) {
            errors = errors.split(',')
        }
        let id = req.params.id;
        let movie;
        let users;
        Movie.findByPk(id, {
            include: User
        })
            .then(data => {
                movie = data;
                return User.findAll({
                    include: Movie
                })
            })
            .then(data => {
                users = data;
                return Rating.findAll({
                    where: { MovieId:id },
                })
            })
            .then(data => {
                let userId = +req.session.userId
                let username = req.session.username
                let avgRating;
                let countedRating;
                if (data.length === 0) {
                    res.render('addRatingOnMovie', { movie: movie, users: users, errors, avgRating, countedRating, userId, username, userStatus: userStatus(req), changeTime})
                } else {
                    let ratings = []
    
                    data.forEach(movie => {
                        ratings.push(movie.rating)
                    })
    
                    avgRating = ratings.reduce((num, nextNum) => {
                        return num + nextNum;
                    }) / ratings.length;
    
                    let countedRatingsObj = {
                        "1": 0,
                        "2": 0,
                        "3": 0,
                        "4": 0,
                        "5": 0,
                        "6": 0,
                        "7": 0,
                        "8": 0,
                        "9": 0,
                        "10": 0
                    }
    
                    for (let i = 0; i < ratings.length; i++) {
                        countedRatingsObj[ratings[i]]++
                    }
    
                    countedRating = Object.values(countedRatingsObj);
    
                    res.render('addRatingOnMovie', { movie: movie, users: users, errors, avgRating, countedRating, userId, username, userStatus: userStatus(req), changeTime})
                }
            })
            .catch(err => {
                res.send(err);
            })
    }

    static postAddUser(req, res) {
        let id = req.params.id;
        let newRating = {
            MovieId: id,
            UserId: req.body.UserId,
            rating: req.body.rating,
            comment: req.body.comment
        }

        Rating.create(newRating)
            .then(data => {
                res.redirect(`/movies/add/user/${id}`)
            })
            .catch(err => {
                let errors = []
                err.errors.forEach(error => {
                    errors.push(error.message);
                })
                res.redirect(`/movies/add/user/${id}?errors=${errors}`);
            })
    }
}

module.exports = MovieController;