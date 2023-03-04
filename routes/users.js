const express = require('express');
const router = express.Router();
const passport = require('passport');  //getting the passport library..

const usersController = require('../controllers/users_controller');

router.get('/profile/:id', passport.checkAuthentication, usersController.profile);

//in index.js file a users prefix is created u need to use both that users+this sign-up in this local host url.
//here we took post since data is being updated.. in the database..
router.post('/update/:id', passport.checkAuthentication, usersController.update);

router.get('/sign-up', usersController.signUp);
router.get('/sign-in', usersController.signIn);

//  it is post since we are positng data and going to other pages
router.post('/create', usersController.create);

//use passport as a middle ware to authenticate..and router.post not only  takes 2 but also  3 

//here first the request comes to router.post and passport first authenticates it ,if the authentication is done then it returns the user(call back function  ), if it is not done then it redirects to sign in page.if it is done then next the below function is called...(i.e createsession..)
// use passport as a middleware to authenticate
router.post('/create-session', passport.authenticate(  //this passport.authentication checks wheather user is autenticated or not we can see code in cotroller.js 
    'local',
    {failureRedirect: '/users/sign-in'},
), usersController.createSession);


router.get('/sign-out',usersController.destroySession);

module.exports = router;