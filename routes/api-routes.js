var db = require("../models");

module.exports = function(app){

  // Set up the routes...

  // Regex to suport "/index" or "/"
  app.get(/\/(index)?/, function(req, res){
  	// Query all burgers and display.
    db.Burger.findAll({order: db.sequelize.col('id')}).then(function(result){
      var resultObject = {
        burgers: result
      };
      res.render("index", resultObject);
    });
  });

  // POST route for new burgers.
  app.post("/api/newburger", function(req, res){
  	// Create a new burger record.
    db.Burger.create({
      burger_name: req.body.name
    }, {
      fields: [ 'burger_name' ]
    }).then(function(result){
      res.json({ id: result.insertId });
    });
  });

  // PUT route for updates.
  app.put("/api/burger/:id", function(req, res){
    // Update an existing burger state.
  	var state = 1; // (devoured)
    db.Burger.update({
      devoured: state
    }, {
      where: {
        id: req.params.id
      }
    })
    .then(function(result){
      res.status(200).end();
    });

  });
};
