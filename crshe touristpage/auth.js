const express = require('express');
const passport = require('passport');
const User = require('../models/User');
const router = express.Router();

router.get('/login', (req, res) => {
    res.render('login');
});

router.post('/login', passport.authenticate('local', {
    successRedirect: '/',
    failureRedirect: '/auth/login'
}));

router.get('/signup', (req, res) => {
    res.render('signup');
});

router.post('/signup', (req, res) => {
    const newUser = new User({ username: req.body.username, email: req.body.email });
    User.register(newUser, req.body.password, (err, user) => {
        if (err) {
            console.log(err);
            return res.render('signup');
        }
        passport.authenticate('local')(req, res, () => {
            res.redirect('/');
        });
    });
});

module.exports = router;
