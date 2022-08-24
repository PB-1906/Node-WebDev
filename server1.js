const http = require('http');
const PORT = process.env.PORT || 5000;

const Server = http.createServer((request,response) => {
    response.writeHead(200,{'Content-Type':'text/plain'});
    response.end('Hello World\n');

});
Server.listen(PORT,() => {
    console.log(`Server is running on port ${PORT}`);
});
Server.on('error',(error) => {
    if (error.code === 'EADDRINUSE') {
    console.log('Address in use, retrying...');
}
});