// Generated by CoffeeScript 2.5.1
(function() {
  var validate;

  ({validate} = require('./utils'));

  // GET /accounts/:accountId/transactions[/:id]
  exports.transactions = function(req = {}) {
    var id, route;
    ({id} = req);
    route = (function() {
      switch (false) {
        case id == null:
          return `accounts/${this.options.accountId}/transactions/${id}`;
        default:
          return `accounts/${this.options.accountId}/transactions`;
      }
    }).call(this);
    return this.request(req, route);
  };

  // GET /accounts/:accountId/transactions/idrange
  exports.transactions.idrange = function(req = {}) {
    var from, to;
    ({from, to} = req);
    return this.request(req, `accounts/${this.options.accountId}/transactions/idrange?from=${from}&to=${to}`);
  };

  // GET /accounts/:accountId/transactions/sinceid
  exports.transactions.sinceid = function(req = {}) {
    var id;
    ({id} = req);
    return this.request(req, `accounts/${this.options.accountId}/transactions/sinceid?id=${id}`);
  };

  // GET /accounts/:accountId/transactions/stream
  exports.transactions.stream = function(req = {}) {
    return this.subscribe(req, `accounts/${this.options.accountId}/transactions/stream`);
  };

}).call(this);
