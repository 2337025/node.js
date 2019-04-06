var fs = require("fs");

fs.unlink('./input.txt',function(err){
    if(err){
        console.error(err);
    }
    console.log("文件删除成功");
});





