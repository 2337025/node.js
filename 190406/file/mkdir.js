var fs = require('fs');

fs.mkdir('./dir/',function(err){
    if(err){
        return console.error(err);
    }
    console.log("目录创建成功！");
});








