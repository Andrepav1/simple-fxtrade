{validate} = require './utils'

# GET /instruments/:accountId/candles
exports.candles = (req = {}) ->
  validate req, ['id']
  { id, granularity } = req
  route = switch
    when granularity? then "instruments/#{id}/candles?granularity=#{granularity}"
    else "instruments/#{id}/candles"

  return @request req, route, false
