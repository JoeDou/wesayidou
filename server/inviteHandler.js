var mongoose = require('mongoose');
var blue     = require('bluebird');
var Invite   = require('./mongo/invite').Invite;
var _        = require('lodash');
var Guest    = require('./mongo/guest').Guest;

function InviteHandler(){
    //testing
}

InviteHandler.prototype.findInvite = function(req, res) {
  if( req.query.id ){
    Invite.promFindOne({
      uuid: req.query.id,
      'invitee.firstName': req.query.firstName,
      'invitee.lastName': req.query.lastName
    }).then(function(model){
      if(model){
        res.json({
          success: true,
          payload: model
        })
      } else{
        res.json({
          success: false,
          message: "can not locate RSVP"
        });
      }
    }).done();
  } else {
    res.status(400);
  }
};

InviteHandler.prototype.updateInvite = function(req, res) {
  if( req.params.id && req.body.invitee ) {
    var update = _.map(req.body.invitee, function(guest) {
      return Invite.promFindOneAndUpdate(
        {
          uuid: req.params.id,
          'invitee._id' : guest._id,
        }, {
          $set: {
            'invitee.$.accepted': guest.accepted,
          }
        }, {
          safe: true, 
          new : true
        }
      )
    })
    update.push(Invite.promFindOneAndUpdate(
      {
        uuid: req.params.id
      }, {
        restrictions: req.body.restrictions,
        comments: req.body.comments,
        responded: req.body.responded
      }
    ))

    blue.all(update)
    .then(function(){
      res.sendStatus(200);
    }).catch(function(err){
      res.json({
        success: false,
        message: err
      });
    })
  } else {
    res.json({
      success: false,
      message: "can't find invite"
    });
  }
};

InviteHandler.prototype.createBulkInvite = function(req, res) {
  var invites = _.map(req.body, function(invite){
    var inviteModel = new Invite({
      uuid: invite.uuid,
    })
    _.each(invite.invitee, function(guest){
      inviteModel.invitee.push({
        firstName: guest.firstName,
        lastName: guest.lastName
      })
    })
    return inviteModel.save()
  })

  blue.all(invites)
  .then(function(){
    res.sendStatus(200);
  }).catch(function(err){
    res.json({
      success: false,
      message: err
    });
  })
};

exports.InviteHandler = InviteHandler;
