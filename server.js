var http = require('http');
var fs = require('fs');

var server=http.createServer(function(req, res){
    console.log('request was made '+req.url);
    if(req.url === '/home'|| req.url === '/'){
        res.writeHead(200, {'Content-Type': 'text/html'});
        fs.createReadStream(__dirname+'/index.html').pipe(res);
    }
    else if(req.url==='/api/ninjas1s'){
        var ninjas =[{name:'ryu',age:29},{name:'Pushpesh',age:19}]
        res.writeHead(200, {'Content-Type': 'application/json'});
        res.end(JSON.stringify(ninjas))
    }   
    else{
        res.writeHead(404, {'Content-Type': 'text/html'});
        fs.createReadStream(__dirname+'/404.html').pipe(res);
    }
    });
server.listen(3002,'127.0.0.1');
console.log('hello now listening on port 3000');