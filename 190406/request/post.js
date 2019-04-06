var http = require('http');
var querystring = require('querystring');
var util = require('util');
/*
http.createServer(function(req,res){
    var post = '';

    req.on('data',function(chunk){
        post += chunk;
    });

    req.on('end',function(){
        post = querystring.parse(post);
        res.end(util.inspect(post));
    });
}).listen(8888);
*/

//curl -d "name=tanlex&like=basketball" http://127.0.0.1:8888

http.createServer(function(req,res){
    var body = "";
    req.on('data',function(chunk){
        body += chunk;
    });
    req.on('end',function(){
        body = querystring.parse(body);
        res.writeHead(200,{'Content-Type':'text/html;charset=utf-8'});
        if(body.name && body.like){
            res.write("我的名字："+body.name);
            res.write("\n");
            res.write("我的爱好："+body.like);
        }
        res.end();
    });
}).listen(8888);






