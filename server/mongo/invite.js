var mongoose = require('mongoose');
var blue = require('bluebird');

var guestSchema    = require('./guest').guestSchema;

var inviteSchema = mongoose.Schema({
  uuid:         {type: Number, required: true, index: {unique: true}},
  invitee:      [guestSchema],
  restrictions: {type: String},
  comments:     {type: String}
});

var Invite = mongoose.model('Invite', inviteSchema);

Invite.promFind = blue.promisify(Invite.find);
Invite.promFindOne = blue.promisify(Invite.findOne);
Invite.promFindOneAndUpdate = blue.promisify(Invite.findOneAndUpdate);

exports.Invite = Invite;
