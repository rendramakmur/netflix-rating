const {User} = require('../models')

class HomeController {
    static landingPage(req, res) {
        res.render('home')
    }

    static register(req, res) {
        let errors = req.query.errors;
        if (errors) {
            errors = errors.split(',');
        }
        res.render('register', {errors})
    }

    static getLogin(req, res) {
        res.render('login');
    }

    static postLogin(req, res,next) {
        User.findOne({
            where : {
                username : req.body.username
            }
        })
        .then((data)=> {
            let comparedPassword = bcrypt.compareSync(data.password == req.body.password); // Kalau udah pakai hash nanti ceknya disini pake comparePassword(req.body.password, data.password)
            console.log(comparedPassword, data.password, req.body.password);
            
            if (data && comparedPassword) {
                req.session.username = data.username
                req.session.password =  data.password
                res.redirect('/')
            } else {
                res.redirect('/failed?errors=Invalid username/password');
            }
        })
        .catch((err)=>{
            res.send(err)
        })
        
    }

    static getFailedPage (req, res) {
        let errMessage = req.query.errors
        res.render('failed', {errMessage});
    }
}

module.exports = HomeController;