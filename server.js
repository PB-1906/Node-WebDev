var http = require('http');

var server=http.createServer(function(req, res){
    console.log('request was made ');
    res.writeHead(200,{'Content-Type': 'text/plain'});
    res.end('Hey Ninjas');
});
server.listen(3002,'127.0.0.1');
console.log('hello now listening on port 3000');