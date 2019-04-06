var dns = require('dns');
var util = require('util');

//将域名（比如 'runoob.com'）解析为第一条找到的记录 A
dns.lookup('www.gitlab.com',function(err,address,family){
    console.log('address:',address);
    console.log('family:',family);

    //反向解析 IP 地址，指向该 IP 地址的域名数组。
    dns.reverse(address,'A',function(err,hostnames){
        if(err){
            console.log(err.stack);
        }
        console.log('反向解析 '+address+": "+util.inspect(hostnames));
    });
});