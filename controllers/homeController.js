class HomeController {
    static landingPage(req, res) {
        res.render('home')
    }

    static register(req, res) {
        res.render('register')
    }
}

module.exports = HomeController;