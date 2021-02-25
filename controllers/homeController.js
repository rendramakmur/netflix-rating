const {User} = require('../models')

class HomeController {
    static landingPage(req, res) {
        res.render('home')
    }

    static register(req, res) {
        res.render('register')
    }

    static getLogin(req, res) {
        res.render('login');
    }

    static postLogin(req, res,next) {
        User.findOne({
            where : {
                username : req.body.username,
                password : req.body.password
            }
        })
        .then((data)=>{
            req.session.username = data.username
            req.session.password = data.password
            res.redirect('/movies')
        })
        .catch((err)=>{
            res.send(err)
            console.log(err);
        })
        
        
        

        // Belum dihashing dan belum validate username & passwordnya, setelah login redirect ke home '/'
    }
}

module.exports = HomeController;