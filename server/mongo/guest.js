var mongoose = require('mongoose');
var blue = require('bluebird');

var guestSchema = mongoose.Schema({
  firstName:    {type: String},
  lastName:     {type: String},
  accepted:     {type: Boolean, default: false}
});


exports.guestSchema = guestSchema;
