// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var celebrity = {
  all: function(cb) {
    orm.all("celebrities", function(res) {
      cb(res);
    });
  },
  // The variables cols and vals are arrays.
  create: function(cols, vals, cb) {
    orm.create("celebrities", cols, vals, function(res) {
      cb(res);
    });
  },
  update: function(objColVals, condition, cb) {
    orm.update("celebrities", objColVals, condition, function(res) {
      cb(res);
    });
  },
  delete: function(condition, cb) {
    orm.delete("celebrities", condition, function(res) {
      cb(res);
    });
  }
};

// Export the database functions for the controller (celebritysController.js).
module.exports = celebrity;
