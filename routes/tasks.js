var express = require('express');
var router = express.Router();
const {taskModel} = require('../models/taskModel');

// new task page. //
router.get('/:name', function(req, res, next) {

  var name = req.params.name;
  console.log(name);
  res.render('newTask', {name: name} );

});

// Saving the Task
router.post('/save', async function(req, res, next) {

    var data = { email: req.body.email, name: req.body.name, date: req.body.date, description: req.body.desc};
    console.log(data);
    var task = new taskModel(data);

    await task.save((error, data) => {
        if(error) {
          res.json( { "Status": "Error"});
          throw error;
        } else {
          res.render('userPage', {name: req.body.email});
        }
    
      }); 
  
  });

  // Saving the Task
router.get('/view/:name', async function(req, res, next) {

    var email = req.params.name;
    console.log(email);

    await taskModel.find({'email': email}, (error, data) => {
        if(error) {
          res.json( { "Status": "Error"});
          throw error;
        } else if (!data) {
          res.json({"Status": "No Task Found"});
        } else {
            res.render('showTasks', {tasks: data, name: email});
        }
    
      }); 
  
  });


module.exports = router;
