var express = require('express');
var router = express.Router();
const {registerModel} = require('../models/registerModel');

// login Validation
router.post('/', async function(req, res, next) {

  var email = req.body.email;
  var password = req.body.password;
  await registerModel.findOne({$and:[{'email':email},{'password':password}]},(error,data)=>{
    if(error){
        res.json({"Status":"Error"});
        throw error;
    }
    else if(!data){
        res.json({"Status":"Invalid Email or Password"});
      }
    else{
        res.render('userPage', {name: email});
    }
  });

});


// rendering to register page
router.get('/registerPage', function(req, res, next) {

  res.render('register');

});


// registering the user
router.post('/register', async function(req, res, next) {

  var data = {email: req.body.email, password: req.body.password };
  console.log(data);
  var signUp = new registerModel(data);

  await signUp.save((error, data) => {
    if(error) {
      res.json( { "Status": "Error"});
      throw error;
    } else {
      res.render('login');
    }

  });
});


module.exports = router;
