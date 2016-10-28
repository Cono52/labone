/*
Author: Conor O'Flanagan, 13323109
Usage : $ node client.js "text to change to uppercase"

This will take in one string argument, convert the
spaces to %20 and send it off to the php server.

I was converting the spaces so I could send a sentence and not just a single word.
*/

var net = require('net');

var client = new net.Socket();

client.connect(8000, '10.62.0.130', function() {
	console.log('Connected');
	if(!process.argv[2]){
		console.log("please pass in some text");
		client.destroy();
	}
	else {
		client.write("GET /echo.php?message="+process.argv[2].replace(/\s/g, "%20")+" HTTP/1.1\r\n\r\n");
	}
});

client.on('data', function(data) {
	console.log('Received: ' + data);
});

client.on('close', function() {
	console.log('Connection closed');
});
