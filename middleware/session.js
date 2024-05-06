const express = require('express');
const session = require('express-session');

module.exports = session({
    secret: 'secret-key', 
    resave: false, 
    saveUninitialized: false
});