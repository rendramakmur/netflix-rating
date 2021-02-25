let mid =  (req,res,next)=> {
    console.log(req.session);
    if(req.session.username && req.session.password){
        next()
    }else {
        res.send('/failed') // ini ke failed
    }
}

module.exports = mid