{validate} = require './utils'

# GET /instruments/:accountId/candles
exports.candles = (req = {}) ->
  validate req, ['id']
  { id, granularity, includeFirst, price, count, from, to } = req

  route = "instruments/#{id}/candles?"
  route = "#{route}price=#{price}&" if price
  route = "#{route}granularity=#{granularity}&" if granularity
  route = "#{route}includeFirst=#{includeFirst}&" if includeFirst
  route = "#{route}count=#{count}&" if count
  route = "#{route}from=#{from}&" if from
  route = "#{route}to=#{to}&" if to

  return @request req, route, false
