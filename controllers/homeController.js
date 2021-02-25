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

    static postLogin(req, res) {
        let user = {
            username: req.body.username,
            password: req.body.password
        }

        console.log(user);

        // Belum dihashing dan belum validate username & passwordnya, setelah login redirect ke home '/'
    }
}

module.exports = HomeController;