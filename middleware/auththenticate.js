module.exports = (req, res, next) => {
    if (!req.session || !req.session.isAuthenticated || req.session.isAuthenticated == false) {
        //const err = new Error('You shall not pass');
        res.sendStatus(401);
    } else {
        next();
    }
}

