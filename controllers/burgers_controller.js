const express = require("express");
const router = express.Router();

// Import the model.
var burger = require("../models/burger.js");


// Set up the routes...

// Regex to suport "/index" or "/"
router.get(/\/(index)?/, function(req, res){
  // Query all burgers and display.
  burger.all(function(result){
    var resultObject = {
      burgers: result
    };
    res.render("index", resultObject);
  });
});

router.post("/api/newburger", function(req, res){
  // Create a new burger record.
  burger.create(req.body.name, function(result){
    res.json({ id: result.insertId });
  });
});

router.put("/api/burger/:id", function(req, res){
  // Update an existing burger state.
  var state = 1; // (devoured)
  burger.update(req.params.id, state, function(result){
    res.status(200).end();
  });
});

module.exports = router;
