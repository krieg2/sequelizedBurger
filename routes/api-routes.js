var db = require("../models");
const express = require("express");
const router = express.Router();

// Set up the routes...

// Regex to suport "/index" or "/"
router.get(/\/(index)?/, function(req, res){
	// Query all burgers and display.
  db.Burger.findAll({order: db.sequelize.col('id')}).then(function(result){
    var resultObject = {
      burgers: result
    };
    res.render("index", resultObject);
  });
});

// POST route for new burgers.
router.post("/api/newburger", function(req, res){
	// Create a new burger record.
  db.Burger.create({
    burger_name: req.body.name
  }, {
    fields: [ 'burger_name' ]
  }).then(function(result){
    res.redirect(303, "/index");
  });
});

// PUT route for updates.
router.put("/api/burger", function(req, res){
  // Update an existing burger state.
	var state = 1; // (devoured)
  db.Burger.update({
    devoured: state
  }, {
    fields: [ 'devoured' ],
    where: {
      id: req.body.id
    }
  }).then(function(result){
    res.json({ id: result.insertId });
  });
});

module.exports = router;