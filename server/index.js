var http = require("http");
var handler = require("./handler")
var server = http.createServer(handler)

module.exports = server