var http = require('http');
var url = require('url');
var util = require('util');

http.createServer(function(req,res){
    res.writeHead(200,{'Content-Type':'text/plain;charset=utf-8'});

    var params = url.parse(req.url,true).query;
    res.write("我的名字："+params.name);
    res.write("\n");
    res.write("我的爱好："+params.like);
    res.end();
}).listen(8888);


//curl "http://127.0.0.1:8888?name=tanlex&like=basketball"








