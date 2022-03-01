var http = require('http');
var fs = require('fs');
var myReadStream=fs.createReadStream(__dirname+'/readme.txt','utf8');
var myWriteStream=fs.createWriteStream(__dirname+'/writeme.txt','utf8');
myReadStream.pipe(myWriteStream);