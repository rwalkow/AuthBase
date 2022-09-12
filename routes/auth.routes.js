const express = require('express');
const passport = require('passport');
const router = express.Router();

// Google login redirection
router.get('/google',
  passport.authenticate('google', { scope: ['email', 'profile'] }));

// is logged checking
router.get('/google/callback', passport.authenticate('google', { failureRedirect: '/user/no-permission' }),
  (req, res) => {
    res.redirect('/user/logged');
  }
);

// logout
router.get('/logout', function (req, res) {
  req.logout();
  res.redirect('/');
});

module.exports = router;
