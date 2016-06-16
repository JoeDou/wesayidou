var InviteHandler    = require('./inviteHandler');

inviteHandler = new InviteHandler.InviteHandler();

var connectRoutes = function(expressApp) {

  expressApp.get('/invite', function (req, res) {
    inviteHandler.findInvite(req, res);
  });

  expressApp.post('/invite/:id', function (req, res) {
    inviteHandler.updateInvite(req, res);
  });

  expressApp.post('/bulkInvite', function (req, res) {
    inviteHandler.createBulkInvite(req, res);
  });

}

exports.connectRoutes = connectRoutes
