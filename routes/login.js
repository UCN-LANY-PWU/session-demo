const authenticationService = require('../services/authentication');
const express = require('express');
const router = express.Router();

/* GET login */
router.get('/', (req, res) => {
    res.render('login');
});

/* POST user login */
router.post('/', (req, res) => {
    const {username, password} = req.body;

    if(authenticationService(username, password)){
        req.session.isAuthenticated = true;
        res.redirect('secret');
    } else {
        req.session.isAuthenticated = false;
        res.redirect('login');
    }
});

module.exports = router;