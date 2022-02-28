var fs=require('fs');

fs.readFile('demo.txt','utf8',function(err, data){
fs.writeFile('writeMe.txt',data,function(err, result){
    if(err) console.log('error');
});
});

