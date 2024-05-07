const express = require('express');
const session = require('express-session');

module.exports = session({
    secret: 'secret-key', 
    resave: false, 
    saveUninitialized: false, 
    name: 'sessionCookie',
    cookie: {
        secure: false, // if true: only transmit cookie over https, in prod, always activate this
        httpOnly: true, // if true: prevents client side JS from reading the cookie
        maxAge: 1000 * 60 * 30 // session max age in milliseconds
    }
});