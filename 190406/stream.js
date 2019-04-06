var fs = require("fs");
var data = 'My name is tanlex';
/*
var readerStream = fs.createReadStream('input.txt');
readerStream.setEncoding('UTF8');

readerStream.on('data',function(chunk){
    data += chunk;
});
readerStream.on('end',function(){
    console.log(data);
});
readerStream.on('error',function(err){
    console.log(err.stack);
});


var writerStream　= fs.createWriteStream('output.txt');
writerStream.write(data,'UTF8');
writerStream.end();
writerStream.on('finish',function(){
    console.log("写入完成。");
});
writerStream.on('error',function(err){
    console.log(err.stack);
});

//管道流操作
var readerStream = fs.createReadStream('input.txt');
var writerStream = fs.createWriteStream('output.txt');
readerStream.pipe(writerStream);
*/

var zlib = require('zlib');

//压缩
fs.createReadStream('input.txt')
    .pipe(zlib.createGzip())
    .pipe(fs.createWriteStream('input.txt.gz'));

//解压
fs.createReadStream('input.txt.gz')
    .pipe(zlib.createGunzip())
    .pipe(fs.createWriteStream('inputgz.txt'));









