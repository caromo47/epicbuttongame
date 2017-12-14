module.exports = function Route(app, server){
	var io = require('socket.io').listen(server);
	app.get('/', (req,res)=>{
		res.render('index');
	});

	var counter = 0;
	io.sockets.on('connection', (socket) =>{
		socket.on('client_counter', (action)=>{
			console.log(counter);
			counter++;
			io.emit('server_counter',{response: counter});
		});
		socket.on('client_reset_count', (action)=>{
			counter = 0;
			io.emit('server_reset_count', {response: counter});
		});


	});

}
