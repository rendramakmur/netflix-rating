const userStatus = (req) => {
    return req.session?.userId? true : false
}

module.exports = userStatus;