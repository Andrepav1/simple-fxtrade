{validate} = require './utils'

# GET /accounts/:accountId/transactions[/:id]
exports.transactions = (req = {}) ->
  {id} = req
  route = switch
    when id? then "accounts/#{@options.accountId}/transactions/#{id}"
    else "accounts/#{@options.accountId}/transactions"

  return @request req, route

# GET /accounts/:accountId/transactions/idrange
exports.transactions.idrange = (req = {}) ->
  {from, to } = req
  return @request req, "accounts/#{@options.accountId}/transactions/idrange?from=#{from}&to=#{to}"

# GET /accounts/:accountId/transactions/sinceid
exports.transactions.sinceid = (req = {}) ->
  {id} = req
  return @request req, "accounts/#{@options.accountId}/transactions/sinceid?id=#{id}"


# GET /accounts/:accountId/transactions/stream
exports.transactions.stream = (req = {}) ->
  return @subscribe req, "accounts/#{@options.accountId}/transactions/stream"
