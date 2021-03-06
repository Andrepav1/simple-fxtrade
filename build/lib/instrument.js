// Generated by CoffeeScript 2.5.1
(function() {
  var validate;

  ({validate} = require('./utils'));

  // GET /instruments/:accountId/candles
  exports.candles = function(req = {}) {
    var count, from, granularity, id, includeFirst, price, route, to;
    validate(req, ['id']);
    ({id, granularity, includeFirst, price, count, from, to} = req);
    route = `instruments/${id}/candles?`;
    if (price) {
      route = `${route}price=${price}&`;
    }
    if (granularity) {
      route = `${route}granularity=${granularity}&`;
    }
    if (includeFirst) {
      route = `${route}includeFirst=${includeFirst}&`;
    }
    if (count) {
      route = `${route}count=${count}&`;
    }
    if (from) {
      route = `${route}from=${from}&`;
    }
    if (to) {
      route = `${route}to=${to}&`;
    }
    return this.request(req, route, false);
  };

}).call(this);
