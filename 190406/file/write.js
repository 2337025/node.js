var fs = require('fs');

var data = '我是勤奋好学的工程师！'
fs.writeFile('input.txt',data,function(err){
    if(err){
        return console.error(err);
    }
    console.log("数据写入成功");
    console.log("--------------------------");
    fs.readFile('input.txt',function(err,data){
        if(err){
            return console.error(err);
        }
        console.log("异步读取文件内容："+data.toString());
    });
});


