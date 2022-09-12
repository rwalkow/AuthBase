const express = require('express');
const router = express.Router();

const isLogged = (req, res, next) => {
  if (!req.user) {
    res.redirect('/user/no-permission');
  } else {
    next();
  }
};

router.use('/logged', (req, res, next) => {
  if (isLogged(req, res, next)) next();
});

router.use('/profile', (req, res, next) => {
  if (isLogged(req, res, next)) next();
});

router.get('/logged', (req, res) => {
  res.render('logged', { displayName: req.user.displayName, avatar: req.user.photos[0].value });
});

router.get('/profile/settings', (req, res) => {
  res.render('profileSettings');
});

router.get('/profile', (req, res) => {
  res.render('profile');
});

router.get('/no-permission', (req, res) => {
  res.render('noPermission');
});

module.exports = router;
