let mid =  (req,res,next) => {
    console.log(req.session);
    if(req.session.username && req.session.password){
        next()
    } else {
        res.redirect('/failed?errors=Please, login to see this content.') // ini ke failed
    }
}

module.exports = mid