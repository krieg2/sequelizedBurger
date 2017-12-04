const orm = require("../config/orm");

var burger = {
  all: function(callb){
    // Provide the table name and order by column.
    orm.selectAll("burgers", "id", (result) => {
      callb(result);
    });
  },
  create: function(name, callb){
  	var vals = {burger_name: name};
    // Provide the table name and field/value pairs.
    orm.insertOne("burgers", vals, (result) => {
      callb(result);
    });
  },
  update: function(id, state, callb){
  	var vals = {devoured: parseInt(state)};
    // Provide the table name, field/value pairs, and an id.
    orm.updateOne("burgers", vals, id, (result) => {
      callb(result);
    });
  }
};

module.exports = burger;