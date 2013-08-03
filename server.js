var io = require('socket.io'),
	connect = require('connect');

var app = connect().use(connect.static('public')).listen(80);
var connect = io.listen(app);