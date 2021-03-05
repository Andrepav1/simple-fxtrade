{validate} = require './utils'

# GET /instruments/:accountId/candles
exports.candles = (req = {}) ->
  validate req, ['id']
  { id, granularity, includeFirst } = req

  route = "instruments/#{id}/candles?"
  route = "#{route}granularity=#{granularity}&" if granularity
  route = "#{route}includeFirst=#{includeFirst}&" if includeFirst

  return @request req, route, false
