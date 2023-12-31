const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('home')
});
router.get('/profile', (req, res) => {
    res.render('profile')
});
router.get('/register', (req, res) => {
    res.render('register')
});
router.get('/login', (req, res) => {
    res.render('login')
});
router.get('/auth/logout', (req, res) => {
    res.render('logout')
});
module.exports = router;