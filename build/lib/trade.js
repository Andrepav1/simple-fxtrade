// Generated by CoffeeScript 2.5.1
(function() {
  var omit, validate;

  ({omit, validate} = require('./utils'));

  // GET /accounts/:accountId/trades[/:id]
  exports.trades = function(req = {}) {
    var id, open, route;
    ({id, open} = req);
    if (open) {
      req.state = 'OPEN';
    }
    route = (function() {
      switch (false) {
        case id == null:
          return `accounts/${this.options.accountId}/trades/${id}`;
        default:
          return `accounts/${this.options.accountId}/trades`;
      }
    }).call(this);
    return this.request(req, route);
  };

  // PUT /accounts/:accountId/trades/:id/close
  exports.trades.close = function(req = {}) {
    validate(req, ['id']);
    return this('put').request({
      body: omit(req, 'id')
    }, `accounts/${this.options.accountId}/trades/${req.id}/close`);
  };

  // PUT /accounts/:accountId/trades/:id/clientExtensions
  exports.trades.clientExtensions = function(req = {}) {
    validate(req, ['id']);
    return this('put').request({
      body: omit(req, 'id')
    }, `accounts/${this.options.accountId}/trades/${req.id}/clientExtensions`);
  };

  // PUT /accounts/:accountId/trades/:id/orders
  exports.trades.orders = function(req = {}) {
    validate(req, ['id']);
    return this('put').request({
      body: omit(req, 'id')
    }, `accounts/${this.options.accountId}/trades/${req.id}/orders`);
  };

}).call(this);
